type Product = {
    modelo: string,
    precio: number,
    marca: string,
    categoria: string,
    sub_categoria: string,
    descripcion: string,
    img: string[],
    id: string
}
export const cpus: Product[]  = [
    {
        "modelo": "CPU AMD Athlon 3000G",
        "precio": 57.50,
        "marca": "AMD",
        "categoria": "Procesadores",
        "sub_categoria": "Procesadores AMD",
        "descripcion": "N.° de núcleos de CPU: 2; N.° de subprocesos: 4; N.° de núcleos de GPU: 3; Núcleos de cómputo: 5 (2 CPU + 3 GPU); Reloj base: 3.5GHz; Caché L1 total: 192KB; Caché L2 total: 1MB; Caché L3 total: 4MB; Desbloqueados: Sí; CMOS: 14nm; Paquete: AM4; TDP/TDP predeterminado: 35W; Temp. máx.: 95°C",
        "img": ["https://thotcomputacion.com.uy/wp-content/uploads/2023/05/2804_1_02dab0175ad54bb19ca10d48eaf6e445.jpg"],
        "id": "HY56KL89M"
    },
    {
        "modelo": "CPU AMD Ryzen 3 3200G con Radeon Vega 8",
        "precio": 80.00,
        "marca": "AMD",
        "categoria": "Procesadores",
        "sub_categoria": "Procesadores AMD",
        "descripcion": "N.° de núcleos de CPU: 4; N.° de subprocesos: 4; N.° de núcleos de GPU: 8; Reloj base: 3.6GHz; Reloj de aumento máx.: 4GHz; Caché L1 total: 384KB; Caché L2 total: 2MB; Caché L3 total: 4MB; Desbloqueados: Sí; CMOS: 12nm FinFET; Paquete: AM4; Versión de PCI Express: PCIe 3.0 x8; Solución térmica: Wraith Stealth; TDP/TDP predeterminado: 65W; cTDP: 45-65W",
        "img": ["https://thotcomputacion.com.uy/wp-content/uploads/2023/05/2528_1_353a90c4687c4ae68d99560f3e9ba7c8.png"],
        "id": "PX78TR45L"
    },
    {
        "modelo": "CPU AMD Ryzen 5 4500",
        "precio": 95.00,
        "marca": "AMD",
        "categoria": "Procesadores",
        "sub_categoria": "Procesadores AMD",
        "descripcion": "Familia de productos: AMD Ryzen™ Processors; Línea de productos: AMD Ryzen™ 5 Desktop Processors; # de núcleos de CPU: 6; # de hilos: 12; Reloj de aumento máx.: Hasta 4.1GHz; Reloj base: 3.6GHz; Caché L1 total: 384KB; Caché L2 total: 3MB; Caché L3 total: 8MB; TDP/TDP predeterminado: 65W; Processor Technology for CPU Cores: TSMC 7nm FinFET",
        "img": ["https://thotcomputacion.com.uy/wp-content/uploads/2023/09/image_161894_2179ed7add924054803f5c1f9bea61a8.webp"],
        "id": "RV12JW56F"
    },{
        "modelo": "CPU Intel Core i3 10100f 3.60GHz 6MB LGA1200 10th Gen",
        "precio": 97.50,
        "marca": "Intel",
        "categoria": "Procesadores",
        "sub_categoria": "Procesadores Intel",
        "descripcion": "# de núcleos: 4; # de los hilos: 8; Frecuencia base del procesador: 3.60 GHz; Frecuencia turbo máxima: 4.30 GHz; Caché: 6 MB de caché inteligente Intel®; Velocidad del autobús: 8 GT/s; Tecnología Intel® Turbo Boost 2.0 Frecuencia: 4.30 GHz; TDP: 65 W",
        "img": ["https://thotcomputacion.com.uy/wp-content/uploads/2023/05/3914_1_43d97dcd9f1d4494adf85b5d08b1742f-1.jpg"],
        "id": "DF68LM56Y"
    },
    {
        "modelo": "CPU Intel Pentium Gold G6405 2 núcleos 4 hilos",
        "precio": 100.00,
        "marca": "Intel",
        "categoria": "Procesadores",
        "sub_categoria": "Procesadores Intel",
        "descripcion": "Cantidad de núcleos: 2; Cantidad de subprocesos: 4; Frecuencia básica del procesador: 4.10 GHz; Caché: 4 MB Intel® Smart Cache; Velocidad del bus: 8 GT/s; TDP: 58 W; Tamaño de memoria máximo (depende del tipo de memoria): 128 GB; Tipos de memoria: DDR4-2666; Cantidad máxima de canales de memoria: 2; Máximo de ancho de banda de memoria: 41.6 GB/s; Gráficos del procesador: Gráficos UHD Intel® 610; Frecuencia de base de gráficos: 350 MHz; Frecuencia dinámica máxima de gráficos: 1.05 GHz; Memoria máxima de video de gráficos: 64 GB; Compatibilidad con 4K: Yes, at 60Hz; Resolución máxima (HDMI 1.4): 4096×2160@30Hz; Resolución máxima (DP): 4096×2304@60Hz; Resolución máxima (eDP – panel plano integrado): 4096×2304@60Hz; Compatibilidad con DirectX: 12; Compatibilidad con OpenGL: 4.5; Intel® Quick Sync Video: Sí; Tecnología Intel® InTru™ 3D: Sí; Tecnología Intel® Clear Video HD: Sí; tecnología Intel® de video nítido: Sí; Cantidad de pantallas admitidas: 3; Escalabilidad: 1S Only; Revisión de PCI Express: 3.0; Configuraciones de PCI Express: Up to 1×16, 2×8, 1×8+2×4; Cantidad máxima de líneas PCI Express: 16; Zócalos compatibles: FCLGA1200; Máxima configuración de CPU: 1; Especificación de solución térmica: PCG 2015C; TJUNCTION: 100°C; Tamaño de paquete: 37.5mm x 37.5mm",
        "img": ["https://thotcomputacion.com.uy/wp-content/uploads/2023/09/640056881_9499f4426c534daa934ac31e996ca86e.jpg"],
        "id": "LM56JH78V"
    },
    {
        "modelo": "CPU Intel Core i3 12100f Alder Lake 1700",
        "precio": 115.00,
        "marca": "Intel",
        "categoria": "Procesadores",
        "sub_categoria": "Procesadores Intel",
        "descripcion": "Cantidad de núcleos: 4; # of Performance-cores: 4; # of Efficient-cores: 0; Cantidad de subprocesos: 8; Frecuencia turbo máxima: 4.30 GHz; Performance-core Max Turbo Frequency: 4.30 GHz; Performance-core Base Frequency: 3.30 GHz; Caché: 12 MB Intel® Smart Cache; Total L2 Cache: 5 MB; Processor Base Power: 58 W; Maximum Turbo Power: 89 W",
        "img": ["https://thotcomputacion.com.uy/wp-content/uploads/2023/05/4519_1_4ed5a6ee8ce741d6b1673fbcb1e8ec14.jpg"],
        "id": "YT90FW56P"
    },            
    {
        "modelo": "CPU AMD Ryzen 5 5500",
        "precio": 125.00,
        "marca": "AMD",
        "categoria": "Procesadores",
        "sub_categoria": "Procesadores AMD",
        "descripcion": "N.° de núcleos de CPU: 6; N.° de subprocesos: 12; Reloj base: 3.6GHz; Reloj de aumento máx.: Hasta 4.2GHz; Caché L2 total: 3MB; Caché L3 total: 16MB; Desbloqueados: Sí; CMOS: TSMC 7nm FinFET; Paquete: AM4; Versión de PCI Express: PCIe® 3.0; Solución térmica: Wraith Stealth; TDP/TDP predeterminado: 65W; Temp. máx.: 90°C; Velocidad máxima de memoria: Up to 3200MHz; Tipo de memoria: DDR4; Canales de memoria: 2",
        "img": ["https://thotcomputacion.com.uy/wp-content/uploads/2023/05/4690_1_65caf8024a0247e6ae27f846eedb8178.jpg"],
        "id": "QW34PL67D"
    },
    {
        "modelo": "CPU Intel Core i3 10100 3.60GHz 6MB LGA1200 10th Gen",
        "precio": 125.00,
        "marca": "Intel",
        "categoria": "Procesadores",
        "sub_categoria": "Procesadores Intel",
        "descripcion": "# de núcleos: 4; # de los hilos: 8; Frecuencia base del procesador: 3.60 GHz; Frecuencia turbo máxima: 4.30 GHz; Caché: 6 MB de caché inteligente Intel®; Velocidad del autobús: 8 GT/s; Tecnología Intel® Turbo Boost 2.0 Frecuencia: 4.30 GHz; TDP: 65 W",
        "img": ["https://thotcomputacion.com.uy/wp-content/uploads/2023/05/3914_1_43d97dcd9f1d4494adf85b5d08b1742f-1.jpg"],
        "id": "FR89LW23K"
    },    
    {
        "modelo": "CPU AMD Ryzen 5 4600G con Gráficos Radeon",
        "precio": 140.00,
        "marca": "AMD",
        "categoria": "Procesadores",
        "sub_categoria": "Procesadores AMD",
        "descripcion": "AMD Ryzen™ 5 4000 G-Series Desktop Processors with Radeon™ Graphics; N.° de núcleos de CPU: 6; N.° de subprocesos: 12; Reloj de aumento máx.: Hasta 4.2GHz; Reloj base: 3.7GHz; Caché L1 total: 384KB; Caché L2 total: 3MB; Caché L3 total: 8MB; TDP/TDP predeterminado: 65W; AMD Configurable TDP (cTDP): 45-65W; Processor Technology for CPU Cores: TSMC 7nm FinFET; Desbloqueados: Sí; Paquete: AM4; Temp. máx.: 95°C; Versión de PCI Express: PCIe® 3.0; Tipo de memoria: DDR4; Canales de memoria: 2; Velocidad máxima de memoria: Up to 3200MHz; Modelo de gráficos: Radeon™ Graphics; N.° de núcleos de GPU: 7; Frecuencia de gráficos: 1900 MHz",
        "img": ["https://thotcomputacion.com.uy/wp-content/uploads/2023/05/4993_1_07ffe51b73414c969f0ae2f133b5d40d.jpg"],
        "id": "RF12MN67B"
    },
    {
        "modelo": "CPU Intel Core i5 10400f 2.9GHz 12MB LGA1200 10th Gen",
        "precio": 140.00,
        "marca": "Intel",
        "categoria": "Procesadores",
        "sub_categoria": "Procesadores Intel",
        "descripcion": "Cantidad de núcleos: 6; Cantidad de subprocesos: 12; Frecuencia básica del procesador: 2.90 GHz; Frecuencia turbo máxima: 4.30 GHz; Caché: 12 MB Intel® Smart Cache; Velocidad del bus: 8 GT/s; TDP: 65 W",
        "img": ["https://thotcomputacion.com.uy/wp-content/uploads/2023/05/i5-10.png"],
        "id": "BL67NK23Q"
    },
    {
        "modelo": "CPU Intel Core i3 13100f Raptor Lake 1700",
        "precio": 150,
        "marca": "Intel",
        "categoria": "Procesadores",
        "sub_categoria": "Procesadores Intel",
        "descripcion": "Número de procesador: i3-13100F; Litografía: Intel 7; Condiciones de uso: PC/Cliente/Tableta; Núcleos totales: 4; N.º de núcleos de rendimiento: 4; Subprocesos totales: 8; Frecuencia turbo máxima: 4.50 GHz; Frecuencia turbo máxima de núcleo de rendimiento: 4.50 GHz; Frecuencia base de núcleo de rendimiento: 3.40 GHz; Caché inteligente Intel® de 12 MB; Caché L2 total: 5 MB; Potencia base del procesador: 58W; Máxima potencia turbo: 89W",
        "img": ["https://thotcomputacion.com.uy/wp-content/uploads/2023/05/5144_1_6669facecc4f4b288698366b85d11eb5.jpg"],
        "id": "JN45TW78S"
    },
    {
        "modelo": "CPU AMD Ryzen 5 5600GT AM4",
        "precio": 160.00,
        "marca": "AMD",
        "categoria": "Procesadores",
        "sub_categoria": "Procesadores AMD",
        "descripcion": "Línea de productos: AMD Ryzen™ 5 5000 G-Series Desktop Processors with Radeon™ Graphics; N.° de núcleos de CPU: 6; N.° de subprocesos: 12; Reloj de aumento máx.: Hasta 4.6GHz; Reloj base: 3.6GHz; Caché L1 total: 384KB; Caché L2 total: 3MB; Caché L3 total: 16MB; TDP/TDP predeterminado: 65W; AMD Configurable TDP (cTDP): 45-65W; Processor Technology for CPU Cores: TSMC 7nm FinFET; Desbloqueados: Sí; Paquete: AM4; Solución térmica: AMD Wraith Stealth; Temp. máx.: 95°C; Versión de PCI Express: PCIe® 3.0; Tipo de memoria: DDR4; Canales de memoria: 2; Velocidad máxima de memoria: Up to 3200MT/s; Modelo de gráficos: Radeon™ Graphics; N.° de núcleos de GPU: 7; Frecuencia de gráficos: 1900 MHz",
        "img": ["https://thotcomputacion.com.uy/wp-content/uploads/2024/01/4079_1_f27796fba6f846e3b0384d87a8bf5c3033440_a1bc65bc204e4ddcac8408b22f8525b1.jpg"],
        "id": "LD45XQ78F"
    },
    {
        "modelo": "CPU Intel Core i5 12400f Alder Lake 1700",
        "precio": 164.99,
        "marca": "Intel",
        "categoria": "Procesadores",
        "sub_categoria": "Procesadores Intel",
        "descripcion": "Cantidad de núcleos: 6; # of Performance-cores: 6; # of Efficient-cores: 0; Cantidad de subprocesos: 12; Frecuencia turbo máxima: 4.40 GHz; Performance-core Max Turbo Frequency: 4.40 GHz; Performance-core Base Frequency: 2.50 GHz; Caché: 18 MB Intel® Smart Cache; Total L2 Cache: 7.5 MB; Processor Base Power: 65 W; Maximum Turbo Power: 117 W",
        "img": ["https://thotcomputacion.com.uy/wp-content/uploads/2023/05/4460_1_567d2ff893c648139e38600d4af968dc.jpg"],
        "id": "PL34XT89J"
    },
    {
        "modelo": "CPU Intel Core i3 12100 Alder Lake 1700",
        "precio": 164.99,
        "marca": "Intel",
        "categoria": "Procesadores",
        "sub_categoria": "Procesadores Intel",
        "descripcion": "Cantidad de núcleos: 4; # of Performance-cores: 4; # of Efficient-cores: 0; Cantidad de subprocesos: 8; Frecuencia turbo máxima: 4.30 GHz; Performance-core Max Turbo Frequency: 4.30 GHz; Performance-core Base Frequency: 3.30 GHz; Gráficos del procesador: Gráficos UHD Intel® 730; Frecuencia de base de gráficos: 300 MHz; Frecuencia dinámica máxima de gráficos: 1.40 GHz; Caché: 12 MB Intel® Smart Cache; Total L2 Cache: 5 MB; Processor Base Power: 58 W; Maximum Turbo Power: 89 W",
        "img": ["https://thotcomputacion.com.uy/wp-content/uploads/2023/05/4865_1_908494ec9383402d9d487a59a94026c6.jpg"],
        "id": "PL34XT89J"
    },
    {
        "modelo": "CPU Intel Core i3 14100f Raptor Lake 1700",
        "precio": 169.99,
        "marca": "Intel",
        "categoria": "Procesadores",
        "sub_categoria": "Procesadores Intel",
        "descripcion": "Cantidad de núcleos: 4; Cantidad de Performance-cores: 4; Cantidad de Efficient-cores: 0; Cantidad de subprocesos: 8; Frecuencia turbo máxima: 4.7 GHz; Frecuencia turbo máxima del Performance-core: 4.7 GHz; Frecuencia base de Performance-core: 3.5 GHz; Caché: 12 MB Intel® Smart Cache; Caché L2 total: 5 MB; Potencia base del procesador: 58 W; Potencia turbo máxima: 110 W; Tamaño de memoria máximo (depende del tipo de memoria): 192 GB; Tipos de memoria: Up to DDR5 4800 MT/s, Up to DDR4 3200 MT/s",
        "img": ["https://thotcomputacion.com.uy/wp-content/uploads/2024/01/CPUIT14100F__596492_023ab3720f094249a7eac27666bba168.jpg"],
        "id": "TY67LK89N"
    },            
    {
        "modelo": "CPU AMD Ryzen 5 8400F AM5",
        "precio": 185.00,
        "marca": "AMD",
        "categoria": "Procesadores",
        "sub_categoria": "Procesadores AMD",
        "descripcion": "Arquitectura Zen 4; N.º de núcleos de CPU: 6; Múltiples subprocesos (SMT): Sí; N.º de subprocesos: 12; Reloj turbo máximo: Hasta 4.7 GHz; Reloj base: 4.2 GHz; Caché L2: 6 MB; Caché L3: 16 MB; TDP predeterminada: 65W; TDP configurable de AMD (cTDP): 45-65W; Tecnología de procesador para núcleos de CPU: TSMC 4nm FinFET; Tamaño del chip de procesamiento de CPU (CCD): 178mm²; Recuento del chip del paquete: 1; Desbloqueado para overclocking: Sí; AMD EXPO™ Memory Overclocking Technology: Sí; Precision Boost Overdrive: Sí; Compensaciones de voltaje del optimizador de curva: Sí; AMD Ryzen™ Master Support: Sí; Socket de CPU: AM5; CPU Boost Technology: Precision Boost 2; Conjunto de instrucciones: x86-64; Extensiones compatibles: AES, AMD-V, AVX, AVX2, AVX512, FMA3, MMX-plus, SHA, SSE, SSE2, SSE3, SSSE3, SSE4.1, SSE4.2, SSE4A, x86-64; Temperatura de funcionamiento máxima (Tjmax): 95°C",
        "img": ["https://thotcomputacion.com.uy/wp-content/uploads/2024/06/6320_1_34f8163e9478499ba1dd0d711e3ef1eb.jpg"],
        "id": "QW34PL67D"
    },
    {
        "modelo": "CPU Intel Core i3 13100 Raptor Lake 1700",
        "precio": 185.00,
        "marca": "Intel",
        "categoria": "Procesadores",
        "sub_categoria": "Procesadores Intel",
        "descripcion": "Número de procesador: i3-13100F; Litografía: Intel 7; Núcleos totales: 4; N.º de núcleos de rendimiento: 4; Subprocesos totales: 8; Frecuencia turbo máxima: 4.50 GHz; Frecuencia turbo máxima de núcleo de rendimiento: 4.50 GHz; Frecuencia base de núcleo de rendimiento: 3.40 GHz; Caché: Caché inteligente Intel® de 12 MB; Caché L2 total: 5 MB; Potencia base del procesador: 58W; Máxima potencia turbo: 89W; Gráficos del procesador: Gráficos UHD Intel® 730; Frecuencia de base de gráficos: 300 MHz; Frecuencia dinámica máxima de gráficos: 1.50 GHz",
        "img": ["https://thotcomputacion.com.uy/wp-content/uploads/2023/05/5145_1_6b581b4785ac491aa79efeaffdbadee0.jpg"],
        "id": "TR56JH90K"
    },    
    {
        "modelo": "CPU AMD Ryzen 5 5600X AM4",
        "precio": 195.00,
        "marca": "AMD",
        "categoria": "Procesadores",
        "sub_categoria": "Procesadores AMD",
        "descripcion": "# de núcleos de CPU: 6; # de hilos: 12; Reloj base: 3.7GHz; Reloj de aumento máx.: Hasta 4.6GHz; Caché L2 total: 3MB; Caché L3 total: 32MB; Desbloqueados: Sí; CMOS: TSMC 7nm FinFET; Paquete: AM4; Versión de PCI Express: PCIe 4.0; Solución térmica (PIB): Wraith Stealth; TDP/TDP predeterminado: 65W; Velocidad máxima de memoria: Up to 3200MHz; Tipo de memoria: DDR4",
        "img": ["https://thotcomputacion.com.uy/wp-content/uploads/2023/09/4690_1_65caf8024a0247e6ae27f846eedb817872492_4f90fdbaf56f47a1bf4194be853c6c7b.jpg"],
        "id": "JK34XR78L"
    },
    {
        "modelo": "CPU Intel Core i5 12400 Alder Lake 1700",
        "precio": 198.99,
        "marca": "Intel",
        "categoria": "Procesadores",
        "sub_categoria": "Procesadores Intel",
        "descripcion": "Cantidad de núcleos: 6; # of Performance-cores: 6; # of Efficient-cores: 0; Cantidad de subprocesos: 12; Frecuencia turbo máxima: 4.40 GHz; Performance-core Max Turbo Frequency: 4.40 GHz; Performance-core Base Frequency: 2.50 GHz; Caché: 18 MB Intel® Smart Cache; Total L2 Cache: 7.5 MB; Processor Base Power: 65 W; Maximum Turbo Power: 117 W",
        "img": ["https://thotcomputacion.com.uy/wp-content/uploads/2023/05/4459_1_b8d74e5a2343475aa918461c347db35a.jpg"],
        "id": "YT67PL89F"
    },
    {
        "modelo": "CPU Intel Core i3 14100 Raptor Lake 1700",
        "precio": 210.00,
        "marca": "Intel",
        "categoria": "Procesadores",
        "sub_categoria": "Procesadores Intel",
        "descripcion": "Cantidad de núcleos: 4; Cantidad de Performance-cores: 4; Cantidad de Efficient-cores: 0; Cantidad de subprocesos: 8; Frecuencia turbo máxima: 4.7 GHz; Frecuencia turbo máxima del Performance-core: 4.7 GHz; Frecuencia base de Performance-core: 3.5 GHz; Caché: 12 MB Intel® Smart Cache; Caché L2 total: 5 MB; Potencia base del procesador: 58 W; Potencia turbo máxima: 110 W; Tamaño de memoria máximo (depende del tipo de memoria): 192 GB; Tipos de memoria: Up to DDR5 4800 MT/s, Up to DDR4 3200 MT/s; Nombre de GPU: Intel® UHD Graphics 730",
        "img": ["https://thotcomputacion.com.uy/wp-content/uploads/2024/01/LD000609603030893_a0a21833fdb049a08637488560d1d40f.jpg"],
        "id": "PL45XT90J"
    },        
    {
        "modelo": "CPU AMD Ryzen 5 8500G AM5",
        "precio": 225.00,
        "marca": "AMD",
        "categoria": "Procesadores",
        "sub_categoria": "Procesadores AMD",
        "descripcion": "Línea de productos: AMD Ryzen™ 5 8000 G-Series Desktop Processors with Radeon™ Graphics; N.° de núcleos de CPU: 6; N.° de subprocesos: 12; Reloj de aumento máx.: Hasta 5.0GHz; Reloj base: 3.5GHz; Caché L2 total: 6MB; Caché L3 total: 16MB; TDP/TDP predeterminado: 65W; AMD Configurable TDP (cTDP): 45-65W; Processor Technology for CPU Cores: TSMC 4nm FinFET; Paquete: AM5; Temp. máx.: 95°C; Versión de PCI Express: PCIe® 4.0; Tipo de memoria: DDR5; Canales de memoria: 2; Modelo de gráficos: AMD Radeon™ 740M; N.° de núcleos de GPU: 4; Frecuencia de gráficos: 2800 MHz",
        "img": ["https://thotcomputacion.com.uy/wp-content/uploads/2024/01/232364250-H_Ryzen5_8500G_3DPIB_FR54935_6478b7220a6a4bea8717edc64a94e954-scaled.jpg"],
        "id": "JN78SW56F"
    },
    {
        "modelo": "CPU AMD Ryzen 5 7600 AM5",
        "precio": 270.00,
        "marca": "AMD",
        "categoria": "Procesadores",
        "sub_categoria": "Procesadores AMD",
        "descripcion": "Línea de productos: AMD Ryzen™ 5 Processors; N.° de núcleos de CPU: 6; N.° de subprocesos: 12; Reloj de aumento máx.: Hasta 5.1GHz; Reloj base: 3.8GHz; Caché L1 total: 384KB; Caché L2 total: 6MB; Caché L3 total: 32MB; TDP/TDP predeterminado: 65W; Processor Technology for CPU Cores: TSMC 5nm FinFET; Desbloqueados: Sí; Paquete: AM5; Solución térmica: AMD Wraith Stealth; Temp. máx.: 95°C",
        "img": ["https://thotcomputacion.com.uy/wp-content/uploads/2023/05/r5-7.jpg"],
        "id": "NR56JH34Y"
    },
    {
        "modelo": "CPU AMD Ryzen 5 8600G AM5",
        "precio": 275.00,
        "marca": "AMD",
        "categoria": "Procesadores",
        "sub_categoria": "Procesadores AMD",
        "descripcion": "Línea de productos: AMD Ryzen™ 5 8000 G-Series Desktop Processors with Radeon™ Graphics; N.° de núcleos de CPU: 6; N.° de subprocesos: 12; Reloj de aumento máx.: Hasta 5.0GHz; Reloj base: 4.3GHz; Caché L2 total: 6MB; Caché L3 total: 16MB; TDP/TDP predeterminado: 65W; AMD Configurable TDP (cTDP): 45-65W; Processor Technology for CPU Core: TSMC 4nm FinFET; Desbloqueados: Sí; Paquete: AM5; Temp. máx.: 95°C; Versión de PCI Express: PCIe® 4.0; Tipo de memoria: DDR5; Canales de memoria: 2; Modelo de gráficos: AMD Radeon™ 760M; N.° de núcleos de GPU: 8; Frecuencia de gráficos: 2800 MHz",
        "img": ["https://thotcomputacion.com.uy/wp-content/uploads/2024/01/232364250-F_Ryzen5_8600G_3DPIB_FR52741_a5a94a60e0d04862992d9b8ce5110747-scaled.jpg"],
        "id": "PM45LK78S"
    }                       
]