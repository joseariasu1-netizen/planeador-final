import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { mallaCurricular } from '../data/mallaCurricular';
import { Grado, Asignatura, PeriodoId } from '../types';

export const generarPDFMallasCompleto = (
  tipoFiltro?: { grado?: Grado; periodo?: PeriodoId }
) => {
  const doc = new jsPDF({
    orientation: 'landscape',
    unit: 'mm',
    format: 'a4'
  });

  const todosLosGrados: Grado[] = tipoFiltro?.grado 
    ? [tipoFiltro.grado] 
    : ['1°', '2°', '3°', '4°', '5°', '6°', '7°', '8°', '9°', '10°', '11°'];

  const periodos: PeriodoId[] = tipoFiltro?.periodo 
    ? [tipoFiltro.periodo] 
    : [1, 2, 3];

  let isFirstPage = true;

  todosLosGrados.forEach((grado) => {
    const asignaturas: Asignatura[] = ['1°', '2°', '3°', '4°', '5°', '10°', '11°'].includes(grado)
      ? ['Matemáticas']
      : ['Matemáticas', 'Estadística'];

    asignaturas.forEach((asignatura) => {
      periodos.forEach((periodo) => {
        const planes = mallaCurricular[grado]?.[asignatura]?.[periodo] || [];
        if (planes.length === 0) return;

        if (!isFirstPage) {
          doc.addPage();
        }
        isFirstPage = false;

        // Membrete Institucional
        doc.setFillColor(153, 27, 27); // Rojo institucional #991b1b
        doc.rect(14, 10, 269, 16, 'F');

        doc.setFont('helvetica', 'bold');
        doc.setFontSize(11);
        doc.setTextColor(255, 255, 255);
        doc.text('INSTITUCIÓN EDUCATIVA RAFAEL URIBE URIBE', 148, 16, { align: 'center' });

        doc.setFontSize(8.5);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(254, 240, 138); // Amarillo
        doc.text('Malla Curricular Institucional 2025 • Medellín - Comuna 12 (Núcleo 930) • Enfoque DUA', 148, 22, { align: 'center' });

        // Subtítulo del Documento
        doc.setFontSize(10);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(30, 41, 59);
        const nivel = ['1°', '2°', '3°', '4°', '5°'].includes(grado) ? 'Básica Primaria' : ['10°', '11°'].includes(grado) ? 'Educación Media' : 'Básica Secundaria';
        doc.text(`Área: ${asignatura.toUpperCase()} — GRADO ${grado} (${nivel}) — PERIODO ${periodo} (${planes.length} Semanas)`, 14, 32);

        doc.setFontSize(8);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(100, 116, 139);
        doc.text(`Intensidad: ${['1°', '2°'].includes(grado) ? '4 h' : ['3°', '4°', '5°'].includes(grado) ? '3 h' : asignatura === 'Estadística' ? '1 h' : '4 h'} semanales | Formato Oficial Institucional`, 283, 32, { align: 'right' });

        // Tabla de datos
        const tableBody = planes.map((p) => [
          p.semana.toString(),
          p.titulo,
          p.pensamiento,
          p.competencia + '\n' + p.dba,
          p.evidencia
        ]);

        autoTable(doc, {
          startY: 35,
          head: [['Sem', 'Secuencia Temática Priorizada', 'Pensamiento Matemático', 'Competencia Institucional & DBA', 'Indicadores de Desempeño (Saber / Hacer / Ser)']],
          body: tableBody,
          theme: 'grid',
          headStyles: {
            fillColor: [15, 23, 42], // Slate 900
            textColor: [255, 255, 255],
            fontSize: 7.5,
            fontStyle: 'bold',
            halign: 'center',
            valign: 'middle'
          },
          columnStyles: {
            0: { cellWidth: 12, halign: 'center', fontStyle: 'bold', textColor: [180, 83, 9] },
            1: { cellWidth: 65, fontStyle: 'bold', textColor: [15, 23, 42] },
            2: { cellWidth: 42, textColor: [71, 85, 105] },
            3: { cellWidth: 70, textColor: [30, 41, 59] },
            4: { cellWidth: 80, textColor: [51, 65, 85] }
          },
          styles: {
            fontSize: 7,
            cellPadding: 2,
            overflow: 'linebreak',
            valign: 'top'
          },
          alternateRowStyles: {
            fillColor: [248, 250, 252]
          },
          margin: { left: 14, right: 14 }
        });
      });
    });
  });

  const nombreArchivo = tipoFiltro?.grado
    ? `Malla_Curricular_IERUU_Grado_${tipoFiltro.grado}_Periodo_${tipoFiltro.periodo || 'Completo'}.pdf`
    : `Malla_Curricular_Completa_1_a_11_IERUU_2025.pdf`;

  doc.save(nombreArchivo);
};
