export type menuData = {
        name: string,
        src: string,
        children?: menuData[]
}
export const MenuData: menuData[] = [
    {
        name: "Procesadores",
        src: "/componentes/procesadores",
        children: [
            {
                name: "AMD",
                src: "/componentes/procesadores/amd"
            },
            {
                name: "Intel",
                src: "/componentes/procesadores/intel"
            }

        ]
    },
    {
        name: "Tarjetas Graficas",
        src: "/componentes/tarjetas-graficas",
        children: [
            {
                name: "Nvidea",
                src: "/componentes/tarjetas-graficas/nvidea"
            },
            {
                name: "AMD",
                src: "/componentes/tarjetas-graficas/amd"
            },
            {
                name: "Intel",
                src: "/componentes/tarjetas-graficas/intel"
            }
        ]
    },
    {
        name: "Gabinetes",
        src: "/componentes/gabinetes"
    },
    {
        name: "Placa Madre",
        src: "/componentes/placa-madre"
    },
    {
        name: "Monitores",
        src: "/componentes/monitores"
    }
]