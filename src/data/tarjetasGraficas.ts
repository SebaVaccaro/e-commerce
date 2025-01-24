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
export const tarjetasGraficas: Product[] = [
    {
        modelo: "GPU Biostar GeForce G210 1Gb GDDR3",
        precio: 47.49,
        marca: "Biostar",
        categoria: "tarjeta gráfica",
        sub_categoria: "tarjeta gráfica NVIDIA",
        descripcion: "NVIDIA GeForce 210 GPU; Memoria de alta velocidad de 1024MB; Interfaz de bus PCI Express 2.0 x16; Soporte de la tecnología NVIDIA PureVideo HD; Soporte completo de DirectX 10.1.",
        img: ["https://thotcomputacion.com.uy/wp-content/uploads/2023/07/4321_1_ac048c95715842308cde036c5cb96bbb.jpg"],
        id: "273849516"
    },
    {
        modelo: "Biostar Radeon RX550 4gb ddr5",
        precio: 125.00,
        marca: "Biostar",
        categoria: "tarjeta gráfica",
        sub_categoria: "tarjeta gráfica AMD",
        descripcion: "GPU AMD Radeon RX550; 4GB GDDR5, 128bit con soporte de salida DVI / DP / HDMI; Interfaz de bus PCI Express 3.0 x16; Compatible con tecnología Radeon Freesync; DirectX 12 y Vulkan Optimized; AMD XConnect y HDR Ready.",
        img: ["https://thotcomputacion.com.uy/wp-content/uploads/2023/05/rx550b.jpg"],
        id: "149362873"
    },
    {
        modelo: "GPU Palit GeForce GT 1030 2Gb GDDR5",
        precio: 127.50,
        marca: "Palit",
        categoria: "tarjeta gráfica",
        sub_categoria: "tarjeta gráfica NVIDIA",
        descripcion: "NVIDIA GeForce GT 1030 GPU; 2GB GDDR5, Interfaz de memoria 64bit; DRAM Tipo DDR4; Reloj de gráficos 1151MHz, Reloj de Boost 1379MHz, Reloj de memoria 2100MHz; 384 núcleos CUDA; Ancho de banda de memoria 16.8 GB/s; Microsoft DirectX 12, OpenGL 4.5, Soporte de bus PCI-E 3.0 x 4; DVI Single-Link DVI-D, HDMI 2.0; Máxima resolución digital 4096×2160@60Hz.",
        img: ["https://thotcomputacion.com.uy/wp-content/uploads/2024/07/4473_1_e226c93757de48c48985f569a73cf17d.png"],
        id: "536791028"
    },    
    {
        modelo: "BIOSTAR Radeon RX560 4gb gddr5",
        precio: 160.00,
        marca: "BIOSTAR",
        categoria: "tarjeta gráfica",
        sub_categoria: "tarjeta gráfica AMD",
        descripcion: "AMD Radeon RX560 GPU; 4GB GDDR5, 128bit con salida DVI / Display port / HDMI; Interfaz de bus PCI Express 3.0; Compatible con la tecnología Radeon Freesync; DirectX 12 y Vulkan Optimized; AMD XConnect y HDR Ready.",
        img: ["https://thotcomputacion.com.uy/wp-content/uploads/2024/02/0021391_biostar-radeon-rx-560-4gb-ddr5-va5605rf41_60092923_6a1f4eebe57642079787fb41bea5ae40.jpg"],
        id: "742918365"
    },{
        modelo: "GPU ASrock Intel Arc A310 Low Profile 4Gb DDR6",
        precio: 164.99,
        marca: "ASrock",
        categoria: "tarjeta gráfica",
        sub_categoria: "tarjeta gráfica Intel",
        descripcion: "Intel Arc A310 perfil bajo 4GB; Reloj: GPU / Memoria; GPU Reloj: 2000 MHz; Reloj de memoria: 15,5 Gbps; Gráficos Intel® Arc™ A310; 4 GB GDDR6 de 64 bits; Compatibilidad con DirectX ® 12 Ultimate; PCI ® Express4.0; 1 x DisplayPort™ 2.0 con DSC / 1 x HDMI™ 2.0b; Diseño de perfil bajo; Diseño de doble ventilador; Enfriamiento silencioso de 0 dB; Tarjeta gráfica de súper aleación; Compatible con resolución 8K.",
        img: ["https://thotcomputacion.com.uy/wp-content/uploads/2024/04/6186_1_c9b67f69f1f54db59c69ff3c64e77da6.jpg"],
        id: "385029471"
    },    
    {
        modelo: "GPU Biostar Radeon RX6400 4Gb",
        precio: 180.00,
        marca: "Biostar",
        categoria: "tarjeta gráfica",
        sub_categoria: "tarjeta gráfica AMD",
        descripcion: "AMD Radeon RX6400 GPU; 4GB GDDR6, 64bit con salida Display port / HDMI; Interfaz de bus PCI Express 4.0; Diseño único de ventilador de 80mm; Tamaño completo de 185(L)*42(W)*130(H)mm; Arquitectura AMD RDNA 2; Tecnología AMD FreeSync; Radeon Image Sharpening; Radeon Anti-Lag; Compatible con DirectX® 12 Ultimate y HDMI 2.1 VRR.",
        img: ["https://thotcomputacion.com.uy/wp-content/uploads/2023/05/4733_1_be083cff26de47798db13f02dce59288.jpg"],
        id: "918374652"
    },{
        modelo: "GPU ASrock Intel Arc A380 Challenger 6Gb DDR6",
        precio: 190.00,
        marca: "ASrock",
        categoria: "tarjeta gráfica",
        sub_categoria: "tarjeta gráfica Intel",
        descripcion: "Intel Arc A380 Challenger ITX 6GB OC; A380 CLI 6GO; Reloj: GPU / Memoria; GPU Reloj: 2250 MHz; Reloj de memoria: 15,5 Gbps; Gráficos Intel® Arc™ A380; 6 GB GDDR6 de 96 bits; Compatibilidad con DirectX ® 12 Ultimate; PCI ® Express4.0; 1 conector de alimentación de 8 pines; 3 DisplayPort™ 2.0 con DSC / 1 HDMI™ 2.0b; Diseño de factor de forma pequeño; Ventilador axial rayado; Refrigeración silenciosa de 0 dB; Tarjeta gráfica de súper aleación; Compatibilidad con resolución 8K.",
        img: ["https://thotcomputacion.com.uy/wp-content/uploads/2024/04/6185_1_0a7cedd3b5944d57a8eebad34eea7d33.jpg"],
        id: "204583961"
    },{
        modelo: "GPU MSI GeForce GTX 1650 Ventus XS OC 4GB GDDR6",
        precio: 199.99,
        marca: "MSI",
        categoria: "tarjeta gráfica",
        sub_categoria: "tarjeta gráfica NVIDIA",
        descripcion: "Núcleo/Memoria; Boost Clock / Velocidad de memoria; 1620 MHz / 12 Gbps; 4GB GDDR6; DisplayPort x 1(v1.4a); HDMI x 1(Soporta 4K@60Hz especificado en HDMI 2.0b); DL-DVI-D x 1; Utilitario de Overclocking Afterburner; OC Scanner: Una función automática que encuentra las configuraciones de overclock estable más altas; Kombustor: Soporta las últimas versiones de benchmark DirectX ; Predator: Grabación de video en juego; Experiencia GeForce; Captura y comparte videos, screenshots y transmisiones en vivo con amigos. Mantén tus drivers actualizados y optimiza tus configuraciones de juego; NVIDIA Ansel; Un modo poderoso de fotos que permite tomar fotografías de tus juegos con nivel profesional.",
        img: ["https://thotcomputacion.com.uy/wp-content/uploads/2023/05/2506_2_5fa169f86cae4d719f8f16093e38b9c0.jpg"],
        id: "581036492"
    },{
        modelo: "GPU Sapphire Pulse Radeon RX6400 4Gb",
        precio: 199.99,
        marca: "Sapphire",
        categoria: "tarjeta gráfica",
        sub_categoria: "tarjeta gráfica AMD",
        descripcion: "GPU: Boost Clock: Up to 2321MHz; Memory: 4GB/64 bit DDR6. 16 Gbps Effective; Stream Processors: 768; RDNA™ 2 Architecture; Ray Accelerator: 12",
        img: ["https://thotcomputacion.com.uy/wp-content/uploads/2024/08/6527_1_1534c3e3be214e478eef18e59e276c4e.png"],
        id: "472819365"
    },{
        modelo: "GPU Sapphire Pulse Radeon RX6500XT Gaming OC 4Gb",
        precio: 250.00,
        marca: "Sapphire",
        categoria: "tarjeta gráfica",
        sub_categoria: "tarjeta gráfica AMD",
        descripcion: "PULSE AMD Radeon™ RX 6500 XT; GPU: Boost Clock: Up to 2825MHz; Memory: 4GB/64 bit DDR6. 18 Gbps Effective; Stream Processors: 1024; RDNA™ 2 Architecture; Ray Accelerator: 16",
        img: ["https://thotcomputacion.com.uy/wp-content/uploads/2024/02/RX6500_PULSE_Lite_Box_Card86375_65a5738e56ef4a82868b13a87ecae174-scaled.jpg"],
        id: "193847562"
    },{
        modelo: "GPU MSI GeForce RTX 3050 LP OC 6Gb DDR6",
        precio: 250.00,
        marca: "MSI",
        categoria: "tarjeta gráfica",
        sub_categoria: "tarjeta gráfica NVIDIA",
        descripcion: "GeForce RTX™ 3050 LP 6G OC; La GeForce RTX™ 3050 de 6 GB está construida con la arquitectura NVIDIA Ampere, con núcleos de trazado de rayos dedicados, núcleos tensores de IA y memoria G6 de alta velocidad. Da el paso a GeForce RTX.; Aumentar la velocidad del reloj/memoria; 1492MHz / 14Gbps; 6GB GDDR6; DisplayPort x 1 (v1.4a); HDMI™ x 2 (admite 4K@120Hz como se especifica en HDMI™ 2.1); Diseño de perfil bajo; El diseño de perfil bajo ahorra más espacios; El usuario puede construir un sistema delgado o más pequeño más fácilmente; Diseño térmico de ventiladores duales; Los ventiladores duales cubren más área del disipador de calor para eliminar el calor de manera más eficiente; Centro MSI; El software exclusivo MSI Center le permite monitorear, modificar y optimizar los productos MSI en tiempo real; Utilidad de overclocking Afterburner; OC Scanner: una función automatizada encuentra la configuración de overclock estable más alta; Visualización en pantalla: proporciona información en tiempo real sobre el rendimiento de su sistema; Predator: Grabación de vídeo dentro del juego.",
        img: ["https://thotcomputacion.com.uy/wp-content/uploads/2024/03/6134_1_0a4db2c3f8c54c0ab6d95f93d00b5a23.jpg"],
        id: "495283071"
    },{
        modelo: "GPU Palit GeForce RTX3050 Stormx 8GB DDR6",
        precio: 329.00,
        marca: "Palit",
        categoria: "tarjeta gráfica",
        sub_categoria: "tarjeta gráfica NVIDIA",
        descripcion: "Cantidad de memoria: 8 GB; Interfaz de la Memoria: 128 bit; DRAM Type: GDDR6; Reloj de Gráficos: 1552 MHz; Reloj de Boost: 1777 MHz; Reloj de la Memoria: 14 Gbps; Núcleos CUDA: 2560; Ancho de banda de memoria: 224 GB/s; Microsoft DirectX: 12 Ultimate; OpenGL: 4.6; Soporte de Bus: PCI-E 4.0; DVI: Dual-Link DVI; HDMI: 2.1; DisplayPort: DP1.4a x 1; Máxima Resolución Digital: 7680×4320; Altura: 2 Slot; Tamaño de Placa: 162 x 117 x 40 mm; Potencia de la Tarjeta Gráfica: 115 W; Sistema de Energía Recomendado: 550 W; Conectores de Alimentación Suplementarios: 6-pin X1",
        img: ["https://thotcomputacion.com.uy/wp-content/uploads/2023/11/3050sx14885_28e65aaec1b9433ab18d48de4506769f.jpg"],
        id: "827364915"
    },{
        modelo: "GPU MSI GeForce RTX 3050 Ventus 2X 8Gb GDDR6",
        precio: 349.99,
        marca: "MSI",
        categoria: "tarjeta gráfica",
        sub_categoria: "tarjeta gráfica NVIDIA",
        descripcion: "Aumentar la velocidad del reloj/memoria; 1807 MHz/14 Gbps; 8GB GDDR6; DisplayPort x 3; HDMI x 1 (Admite 4K@120Hz como se especifica en HDMI 2.1); Diseño térmico de doble ventilador; TORX Fan 3.0: El galardonado diseño MSI TORX Fan 3.0 crea una alta presión estática y supera los límites del rendimiento térmico; Utilidad de overclocking de poscombustión; Soporta configuraciones multi-GPU; Escáner OC: una función automatizada encuentra la configuración de overclock estable más alta; Visualización en pantalla: proporciona información en tiempo real sobre el rendimiento de su sistema; Predator: grabación de video en el juego; Centro MSI; El exclusivo software MSI Center le permite monitorear, ajustar y optimizar los productos MSI en tiempo real.",
        img: ["https://thotcomputacion.com.uy/wp-content/uploads/2023/11/3735_2_42ffcb38c41b4c9c9b2270f41734af7a.jpg"],
        id: "361728495"
    },     
]