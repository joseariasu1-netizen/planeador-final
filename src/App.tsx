import React, { useState, useEffect } from 'react';
import { Asignatura, DocumentoEscolar, Grado, PeriodoId } from './types';
import { Header } from './components/Header';
import { FilterControls } from './components/FilterControls';
import { TabPlaneador } from './components/TabPlaneador';
import { TabMalla } from './components/TabMalla';
import { TabEvaluaciones } from './components/TabEvaluaciones';
import { ModalDocumento } from './components/ModalDocumento';
import { AsistenteLlamada } from './components/AsistenteLlamada';
import { generarDocumentoOffline } from './data/examenesData';
import { Phone, Sparkles } from 'lucide-react';

export default function App() {
  const [userApiKey, setUserApiKey] = useState<string>(() => {
    return localStorage.getItem('gemini_api_key_ruu') || '';
  });

  const [grado, setGrado] = useState<Grado>('6°');
  const [asignatura, setAsignatura] = useState<Asignatura>('Matemáticas');
  const [periodo, setPeriodo] = useState<PeriodoId>(1);
  const [semana, setSemana] = useState<number>(1);

  const [activeTab, setActiveTab] = useState<'planeador' | 'malla' | 'evaluacion'>('planeador');
  const [modalDoc, setModalDoc] = useState<DocumentoEscolar | null>(null);
  const [isCallAssistantOpen, setIsCallAssistantOpen] = useState<boolean>(false);

  // Asegurar que semana esté dentro del rango del periodo (P1: 1..13, P2: 14..26, P3: 27..40)
  useEffect(() => {
    if (periodo === 1) {
      if (semana < 1 || semana > 13) setSemana(1);
    } else if (periodo === 2) {
      if (semana < 14 || semana > 26) setSemana(14);
    } else if (periodo === 3) {
      if (semana < 27 || semana > 40) setSemana(27);
    }
  }, [periodo]);

  // Regla de negocio: En 10° y 11°, Estadística se integra en Matemáticas
  useEffect(() => {
    if ((grado === '10°' || grado === '11°') && asignatura === 'Estadística') {
      setAsignatura('Matemáticas');
    }
  }, [grado]);

  const handleOpenModal = (
    tipo: 'taller' | 'evaluacion_seg1' | 'evaluacion_seg2' | 'evaluacion_final',
    semanaRef: number
  ) => {
    const doc = generarDocumentoOffline(tipo, grado, asignatura, periodo, semanaRef);
    setModalDoc(doc);
  };

  const handleSelectSemanaForPlan = (semanaNum: number) => {
    setSemana(semanaNum);
    setActiveTab('planeador');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-slate-950">
      {/* Cabecera Institucional y Barra Superior de IA */}
      <Header 
        userApiKey={userApiKey} 
        setUserApiKey={setUserApiKey} 
        onOpenCallAssistant={() => setIsCallAssistantOpen(true)}
      />

      {/* Panel de Filtros Interactivos y Pestañas */}
      <FilterControls
        asignatura={asignatura}
        setAsignatura={setAsignatura}
        grado={grado}
        setGrado={setGrado}
        periodo={periodo}
        setPeriodo={setPeriodo}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Contenido Principal según Pestaña Activa */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-6">
        {activeTab === 'planeador' && (
          <TabPlaneador
            grado={grado}
            asignatura={asignatura}
            periodo={periodo}
            semana={semana}
            setSemana={setSemana}
            onOpenModal={handleOpenModal}
            userApiKey={userApiKey}
          />
        )}

        {activeTab === 'malla' && (
          <TabMalla
            grado={grado}
            asignatura={asignatura}
            periodo={periodo}
            onSelectSemanaForPlan={handleSelectSemanaForPlan}
          />
        )}

        {activeTab === 'evaluacion' && (
          <TabEvaluaciones
            grado={grado}
            asignatura={asignatura}
            periodo={periodo}
            semanaActual={semana}
            onOpenModal={handleOpenModal}
          />
        )}
      </main>

      {/* Botón Flotante de Llamada Telefónica IA */}
      <div className="fixed bottom-5 right-5 z-40 print:hidden">
        <button
          onClick={() => setIsCallAssistantOpen(true)}
          className="group relative flex items-center gap-2.5 px-4 py-3 bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold text-xs sm:text-sm rounded-full shadow-2xl border-2 border-emerald-300/60 transition-all transform hover:scale-105 active:scale-95 ring-4 ring-emerald-500/20"
        >
          <span className="relative flex h-3 w-3 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-400"></span>
          </span>
          <Phone className="w-5 h-5 text-amber-300 animate-bounce shrink-0" />
          <span className="tracking-tight">Línea RUU IA 📞</span>
        </button>
      </div>

      {/* Modal de Asistente de Llamada Telefónica IA */}
      <AsistenteLlamada
        userApiKey={userApiKey}
        isOpen={isCallAssistantOpen}
        onClose={() => setIsCallAssistantOpen(false)}
      />

      {/* Modal de Documentos A4 Imprimibles */}
      {modalDoc && (
        <ModalDocumento
          documento={modalDoc}
          onClose={() => setModalDoc(null)}
          userApiKey={userApiKey}
        />
      )}

      {/* Pie de Página Institucional */}
      <footer className="w-full bg-slate-900 border-t border-slate-800 text-slate-400 text-xs py-4 px-4 text-center print:hidden mt-12">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>
            <strong>IE Rafael Uribe Uribe</strong> • Medellín, Colombia (2026)
          </div>
          <div className="text-slate-500">
            Diseño Universal para el Aprendizaje (DUA) & Evaluador Pruebas ICFES Saber
          </div>
        </div>
      </footer>
    </div>
  );
}
