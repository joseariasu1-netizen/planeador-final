import React, { useState, useEffect, useRef } from 'react';
import { 
  Phone, PhoneOff, Mic, MicOff, Volume2, VolumeX, Sparkles, X, 
  UserCheck, ShieldAlert, MessageSquare, Bot, School, HelpCircle,
  Play, RotateCcw, Activity
} from 'lucide-react';
import { EscudoColegio } from './EscudoColegio';

interface AsistenteLlamadaProps {
  userApiKey: string;
  isOpen: boolean;
  onClose: () => void;
}

interface MensajeLlamada {
  id: string;
  remitente: 'usuario' | 'asistente';
  texto: string;
  hora: string;
}

type PersonaIa = 'tutor' | 'coordinador' | 'secretaria';

export const AsistenteLlamada: React.FC<AsistenteLlamadaProps> = ({
  userApiKey,
  isOpen,
  onClose,
}) => {
  const [estadoCall, setEstadoCall] = useState<'IDLE' | 'DIALING' | 'CONNECTED' | 'ENDED'>('IDLE');
  const [persona, setPersona] = useState<PersonaIa>('tutor');
  const [callDuration, setCallDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [speakerEnabled, setSpeakerEnabled] = useState(true);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [inputTexto, setInputTexto] = useState('');
  const [mensajes, setMensajes] = useState<MensajeLlamada[]>([]);
  const [transcripcionEnVivo, setTranscripcionEnVivo] = useState('');
  const [cargandoRespuesta, setCargandoRespuesta] = useState(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const chatBottomRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const currentAudioSourceRef = useRef<AudioBufferSourceNode | HTMLAudioElement | null>(null);

  // Inicialización de llamada
  useEffect(() => {
    if (isOpen && estadoCall === 'IDLE') {
      iniciarMarcado();
    }
    if (!isOpen) {
      colgarLlamada();
    }
  }, [isOpen]);

  // Cronómetro de llamada
  useEffect(() => {
    if (estadoCall === 'CONNECTED') {
      timerRef.current = setInterval(() => {
        setCallDuration((prev) => prev + 1);
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
      setCallDuration(0);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [estadoCall]);

  // Auto-scroll del transcript
  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [mensajes, transcripcionEnVivo, cargandoRespuesta]);

  // Configuración de Reconocimiento de Voz (STT)
  useEffect(() => {
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = true;
      recognition.lang = 'es-CO';

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onresult = (event: any) => {
        let interim = '';
        let final = '';

        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            final += event.results[i][0].transcript;
          } else {
            interim += event.results[i][0].transcript;
          }
        }

        if (interim) {
          setTranscripcionEnVivo(interim);
        }

        if (final) {
          setTranscripcionEnVivo('');
          enviarPregunta(final);
        }
      };

      recognition.onerror = (event: any) => {
        console.warn('Error en reconocimiento de voz:', event.error);
        setIsListening(false);
        setTranscripcionEnVivo('');
      };

      recognition.onend = () => {
        setIsListening(false);
        setTranscripcionEnVivo('');
      };

      recognitionRef.current = recognition;
    }
  }, [persona, userApiKey]);

  const iniciarMarcado = () => {
    setEstadoCall('DIALING');
    setMensajes([]);

    setTimeout(() => {
      setEstadoCall('CONNECTED');
      // Saludo inicial de la persona seleccionada
      const saludos: Record<PersonaIa, string> = {
        tutor: '¡Hola! Hablas con la Profesora Carolina, tutora de Matemáticas y DUA de la I.E. Rafael Uribe Uribe. ¿En qué te puedo colaborar hoy con los temas o la malla curricular?',
        coordinador: 'Buenas tardes. Le habla el Coordinador Manuel de la I.E. Rafael Uribe Uribe. ¿Tienes inquietudes sobre el calendario escolar, periodos o las Pruebas SABER 11?',
        secretaria: 'Cordial saludo. Hablas con Secretaría Académica de la I.E. Rafael Uribe Uribe. ¿En qué te podemos asesorar sobre nuestras asignaturas y normativas académicas?'
      };

      const saludo = saludos[persona];
      setMensajes([
        {
          id: Date.now().toString(),
          remitente: 'asistente',
          texto: saludo,
          hora: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
      reproducirVoz(saludo);
    }, 2000);
  };

  const colgarLlamada = () => {
    detenerAudioActual();
    if (recognitionRef.current && isListening) {
      try {
        recognitionRef.current.stop();
      } catch (e) {}
    }
    setEstadoCall('ENDED');
    setIsListening(false);
    setIsSpeaking(false);
    setTranscripcionEnVivo('');
  };

  const alternarMicrofono = () => {
    if (isListening) {
      try {
        recognitionRef.current?.stop();
      } catch (e) {}
      setIsListening(false);
    } else {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.start();
        } catch (e) {
          console.error("No se pudo iniciar el micrófono", e);
        }
      } else {
        alert("Tu navegador no soporta dictado directo por micrófono. Puedes escribir tu mensaje en la barra inferior.");
      }
    }
  };

  const detenerAudioActual = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    if (currentAudioSourceRef.current) {
      try {
        if ('stop' in currentAudioSourceRef.current) {
          currentAudioSourceRef.current.stop();
        } else {
          currentAudioSourceRef.current.pause();
        }
      } catch (e) {}
      currentAudioSourceRef.current = null;
    }
    setIsSpeaking(false);
  };

  const reproducirVoz = (texto: string, audioBase64?: string) => {
    if (!speakerEnabled) return;
    detenerAudioActual();

    // Si viene audio de Gemini TTS en base64
    if (audioBase64) {
      try {
        const audio = new Audio(`data:audio/mp3;base64,${audioBase64}`);
        currentAudioSourceRef.current = audio;
        setIsSpeaking(true);

        audio.onended = () => setIsSpeaking(false);
        audio.onerror = () => {
          setIsSpeaking(false);
          reproducirWebSpeech(texto);
        };

        audio.play().catch(() => {
          reproducirWebSpeech(texto);
        });
        return;
      } catch (e) {
        console.warn('Error al reproducir audio Gemini TTS:', e);
      }
    }

    // Fallback: Web Speech API de navegador
    reproducirWebSpeech(texto);
  };

  const reproducirWebSpeech = (texto: string) => {
    if (!('speechSynthesis' in window)) return;

    // Limpiar caracteres especiales para pronunciación fluida
    const textoLimpio = texto
      .replace(/[*_#~]/g, '')
      .replace(/\s+/g, ' ');

    const utterance = new SpeechSynthesisUtterance(textoLimpio);
    utterance.lang = 'es-CO';
    utterance.rate = 1.0;
    utterance.pitch = persona === 'coordinador' ? 0.9 : 1.1;

    // Intentar buscar voz en español
    const voices = window.speechSynthesis.getVoices();
    const vozEspanol = voices.find(v => v.lang.includes('es'));
    if (vozEspanol) {
      utterance.voice = vozEspanol;
    }

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  };

  const enviarPregunta = async (preguntaTexto: string) => {
    if (!preguntaTexto.trim() || cargandoRespuesta) return;

    detenerAudioActual();

    const hora = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const nuevoMsgUsuario: MensajeLlamada = {
      id: Date.now().toString(),
      remitente: 'usuario',
      texto: preguntaTexto.trim(),
      hora
    };

    setMensajes(prev => [...prev, nuevoMsgUsuario]);
    setInputTexto('');
    setCargandoRespuesta(true);

    try {
      const resp = await fetch('/api/gemini/voice-call', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: preguntaTexto,
          persona,
          userApiKey: userApiKey || undefined
        })
      });

      const data = await resp.json();

      if (!resp.ok) {
        throw new Error(data.error || 'Error en la llamada');
      }

      const respuestaIa = data.text || 'Entendido. ¿En qué más te puedo ayudar?';
      const nuevoMsgIa: MensajeLlamada = {
        id: (Date.now() + 1).toString(),
        remitente: 'asistente',
        texto: respuestaIa,
        hora: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMensajes(prev => [...prev, nuevoMsgIa]);
      reproducirVoz(respuestaIa, data.audioBase64);
    } catch (err: any) {
      console.error('Error procesando llamada IA:', err);
      const msgErr: MensajeLlamada = {
        id: (Date.now() + 1).toString(),
        remitente: 'asistente',
        texto: `Disculpa, hubo una interrupción en la señal: ${err.message || 'Error de conexión'}. ¿Podrías repetir tu consulta?`,
        hora: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMensajes(prev => [...prev, msgErr]);
    } finally {
      setCargandoRespuesta(false);
    }
  };

  const formatTiempo = (segundos: number) => {
    const mins = Math.floor(segundos / 60);
    const segs = segundos % 60;
    return `${mins.toString().padStart(2, '0')}:${segs.toString().padStart(2, '0')}`;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in print:hidden">
      <div className="relative w-full max-w-2xl bg-slate-900 border-2 border-purple-500/40 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">

        {/* Barra de Encabezado de la Llamada */}
        <div className="bg-gradient-to-r from-purple-950 via-slate-900 to-red-950 px-4 py-3 border-b border-purple-800/50 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <EscudoColegio className="w-10 h-10 shrink-0" />
              <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-slate-900 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-sm text-white tracking-tight">Línea de Atención Telefónica IA</span>
                <span className="bg-purple-900/80 text-purple-200 border border-purple-600 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                  <Sparkles className="w-2.5 h-2.5 text-amber-400" /> RUU 2026
                </span>
              </div>
              <p className="text-xs text-slate-300">
                Institución Educativa Rafael Uribe Uribe • Comuna 12 Medellín
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              colgarLlamada();
              onClose();
            }}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition"
            title="Cerrar ventana"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Pestañas de Selección de Agente / Persona */}
        <div className="bg-slate-950 px-4 py-2 border-b border-slate-800 flex items-center justify-between flex-wrap gap-2 text-xs">
          <span className="text-slate-400 font-semibold flex items-center gap-1">
            <Bot className="w-3.5 h-3.5 text-amber-400" /> Seleccionar Asistente:
          </span>
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => {
                setPersona('tutor');
                if (estadoCall === 'CONNECTED') iniciarMarcado();
              }}
              className={`px-2.5 py-1 rounded-md font-bold transition flex items-center gap-1 ${
                persona === 'tutor'
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              👩‍🏫 Prof. Carolina (DUA)
            </button>
            <button
              onClick={() => {
                setPersona('coordinador');
                if (estadoCall === 'CONNECTED') iniciarMarcado();
              }}
              className={`px-2.5 py-1 rounded-md font-bold transition flex items-center gap-1 ${
                persona === 'coordinador'
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              👨‍💼 Coord. Manuel (SABER 11)
            </button>
            <button
              onClick={() => {
                setPersona('secretaria');
                if (estadoCall === 'CONNECTED') iniciarMarcado();
              }}
              className={`px-2.5 py-1 rounded-md font-bold transition flex items-center gap-1 ${
                persona === 'secretaria'
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              👩‍💼 Secretaría Académica
            </button>
          </div>
        </div>

        {/* Visualizador de Estado de Llamada */}
        {estadoCall === 'DIALING' && (
          <div className="p-8 text-center flex flex-col items-center justify-center space-y-4 my-auto">
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-purple-900/60 border-2 border-purple-500 flex items-center justify-center animate-ping absolute inset-0 opacity-75" />
              <div className="w-20 h-20 rounded-full bg-purple-950 border-2 border-purple-400 flex items-center justify-center relative z-10 shadow-lg">
                <Phone className="w-10 h-10 text-amber-400 animate-bounce" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Conectando llamada segura...</h3>
              <p className="text-xs text-purple-300 mt-1">
                Conectando con {persona === 'tutor' ? 'Profesora Carolina' : persona === 'coordinador' ? 'Coordinación Académica' : 'Secretaría Académica'}
              </p>
            </div>
          </div>
        )}

        {estadoCall === 'ENDED' && (
          <div className="p-8 text-center flex flex-col items-center justify-center space-y-4 my-auto">
            <div className="w-16 h-16 rounded-full bg-rose-950 border border-rose-700 flex items-center justify-center text-rose-400">
              <PhoneOff className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Llamada Finalizada</h3>
              <p className="text-xs text-slate-400">Gracias por comunicarte con la I.E. Rafael Uribe Uribe.</p>
            </div>
            <button
              onClick={iniciarMarcado}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs flex items-center gap-2 shadow-lg transition"
            >
              <RotateCcw className="w-4 h-4" /> Volver a Marcar
            </button>
          </div>
        )}

        {estadoCall === 'CONNECTED' && (
          <>
            {/* Panel Superior del Estado Activo de Llamada */}
            <div className="bg-slate-950/90 border-b border-slate-800 p-4 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center text-xl font-extrabold ${
                    isSpeaking 
                      ? 'border-amber-400 bg-amber-500/20 ring-4 ring-amber-500/30' 
                      : isListening 
                      ? 'border-emerald-400 bg-emerald-500/20 ring-4 ring-emerald-500/30' 
                      : 'border-purple-500 bg-purple-950'
                  }`}>
                    {persona === 'tutor' ? '👩‍🏫' : persona === 'coordinador' ? '👨‍💼' : '👩‍💼'}
                  </div>
                  {(isSpeaking || isListening) && (
                    <span className="absolute -top-1 -right-1 flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
                    </span>
                  )}
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white text-sm">
                      {persona === 'tutor' ? 'Prof. Carolina (Tutoría DUA)' : persona === 'coordinador' ? 'Coordinador Manuel' : 'Secretaría Académica'}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      {formatTiempo(callDuration)}
                    </span>
                  </div>

                  {/* Indicador de Actividad de Voz */}
                  <div className="text-xs text-slate-400 flex items-center gap-1.5 mt-0.5">
                    {isSpeaking ? (
                      <span className="text-amber-400 font-medium flex items-center gap-1">
                        <Volume2 className="w-3.5 h-3.5 animate-bounce" /> El asistente está hablando...
                      </span>
                    ) : isListening ? (
                      <span className="text-emerald-400 font-medium flex items-center gap-1">
                        <Activity className="w-3.5 h-3.5 animate-pulse text-emerald-400" /> Escuchando tu voz...
                      </span>
                    ) : cargandoRespuesta ? (
                      <span className="text-purple-300 font-medium flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5 animate-spin text-purple-400" /> Analizando duda institucional...
                      </span>
                    ) : (
                      <span>Llamada en curso • Presiona el micrófono o selecciona una duda</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Botones de Control de Llamada (Mic, Altavoz, Colgar) */}
              <div className="flex items-center gap-2">
                <button
                  onClick={alternarMicrofono}
                  className={`p-2.5 rounded-full transition ${
                    isListening
                      ? 'bg-emerald-600 text-white ring-4 ring-emerald-500/40 animate-pulse'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                  title={isListening ? 'Desactivar Micrófono' : 'Hablar por Micrófono'}
                >
                  {isListening ? <Mic className="w-5 h-5" /> : <MicOff className="w-5 h-5 text-slate-400" />}
                </button>

                <button
                  onClick={() => {
                    if (isSpeaking) detenerAudioActual();
                    setSpeakerEnabled(!speakerEnabled);
                  }}
                  className={`p-2.5 rounded-full transition ${
                    speakerEnabled
                      ? 'bg-purple-900 text-purple-200 border border-purple-600'
                      : 'bg-slate-800 text-slate-400'
                  }`}
                  title={speakerEnabled ? 'Silenciar Altavoz IA' : 'Activar Altavoz IA'}
                >
                  {speakerEnabled ? <Volume2 className="w-5 h-5 text-amber-400" /> : <VolumeX className="w-5 h-5 text-slate-400" />}
                </button>

                <button
                  onClick={colgarLlamada}
                  className="p-2.5 bg-rose-600 hover:bg-rose-500 text-white rounded-full transition shadow-md"
                  title="Colgar Llamada"
                >
                  <PhoneOff className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Transcripción Dinámica de la Llamada */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-900/60 font-sans text-sm min-h-[220px]">
              {mensajes.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${
                    msg.remitente === 'usuario' ? 'items-end' : 'items-start'
                  }`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl p-3 shadow.md ${
                      msg.remitente === 'usuario'
                        ? 'bg-purple-700 text-white rounded-tr-none'
                        : 'bg-slate-800 text-slate-100 border border-slate-700 rounded-tl-none'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3 text-[10px] opacity-75 mb-1">
                      <span className="font-bold">
                        {msg.remitente === 'usuario' ? 'Tú (Llamante)' : persona === 'tutor' ? 'Prof. Carolina' : persona === 'coordinador' ? 'Coord. Manuel' : 'Secretaría RUU'}
                      </span>
                      <span>{msg.hora}</span>
                    </div>
                    <p className="leading-relaxed whitespace-pre-wrap">{msg.texto}</p>
                  </div>
                </div>
              ))}

              {/* Dictado en tiempo real si habla el usuario */}
              {transcripcionEnVivo && (
                <div className="flex flex-col items-end">
                  <div className="bg-emerald-900/40 border border-emerald-600 text-emerald-200 rounded-2xl rounded-tr-none p-3 italic text-xs animate-pulse">
                    Escuchando: "{transcripcionEnVivo}..."
                  </div>
                </div>
              )}

              {/* Indicador de respuesta en proceso */}
              {cargandoRespuesta && (
                <div className="flex items-center gap-2 text-purple-300 text-xs italic bg-slate-950/60 p-2.5 rounded-xl border border-purple-800/40 w-fit">
                  <Sparkles className="w-4 h-4 text-amber-400 animate-spin" />
                  El asistente está formulando la respuesta institucional...
                </div>
              )}

              <div ref={chatBottomRef} />
            </div>

            {/* Sugerencias Rápidas de Preguntas Frecuentes */}
            <div className="bg-slate-950 p-2.5 border-t border-slate-800">
              <div className="text-[11px] font-bold text-slate-400 mb-1.5 flex items-center gap-1">
                <HelpCircle className="w-3.5 h-3.5 text-amber-400" /> Preguntas sugeridas para la llamada:
              </div>
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-thin">
                <button
                  onClick={() => enviarPregunta('¿Cuándo se presentan las Pruebas SABER 11 en el grado undécimo?')}
                  className="px-2.5 py-1 bg-slate-800 hover:bg-purple-900 hover:text-white text-slate-300 rounded-full text-xs whitespace-nowrap transition border border-slate-700"
                >
                  🎯 Pruebas SABER 11 en 11°
                </button>
                <button
                  onClick={() => enviarPregunta('¿Por qué en 10° y 11° Estadística está integrada en Matemáticas?')}
                  className="px-2.5 py-1 bg-slate-800 hover:bg-purple-900 hover:text-white text-slate-300 rounded-full text-xs whitespace-nowrap transition border border-slate-700"
                >
                  📊 Estadística en 10° y 11°
                </button>
                <button
                  onClick={() => enviarPregunta('¿Cómo está distribuido el tiempo académico de los 3 periodos?')}
                  className="px-2.5 py-1 bg-slate-800 hover:bg-purple-900 hover:text-white text-slate-300 rounded-full text-xs whitespace-nowrap transition border border-slate-700"
                >
                  📅 Periodos (13, 13 y 14 sem)
                </button>
                <button
                  onClick={() => enviarPregunta('¿Cómo se aplica el DUA en la Institución Educativa Rafael Uribe Uribe?')}
                  className="px-2.5 py-1 bg-slate-800 hover:bg-purple-900 hover:text-white text-slate-300 rounded-full text-xs whitespace-nowrap transition border border-slate-700"
                >
                  🧠 Metodología DUA
                </button>
              </div>
            </div>

            {/* Barra Inferior para Escribir Pregunta si no usa Micrófono */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                enviarPregunta(inputTexto);
              }}
              className="p-3 bg-slate-900 border-t border-slate-800 flex items-center gap-2"
            >
              <input
                type="text"
                value={inputTexto}
                onChange={(e) => setInputTexto(e.target.value)}
                placeholder="Escribe tu duda o usa el botón de micrófono..."
                className="flex-1 px-4 py-2 bg-slate-950 text-white rounded-xl border border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500 text-xs sm:text-sm"
              />
              <button
                type="submit"
                disabled={!inputTexto.trim() || cargandoRespuesta}
                className="px-4 py-2 bg-purple-600 hover:bg-purple-500 disabled:opacity-50 text-white font-bold rounded-xl text-xs transition flex items-center gap-1 shadow"
              >
                Enviar
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
