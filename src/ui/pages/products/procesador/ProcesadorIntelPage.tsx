import { cpus } from "../../../../data/cpus"
import { PageContainer } from "../../../containers/page/PageContainer"

export const ProcesadorIntelPage = () =>{
    const cpuIntel = cpus.filter(cpu=> cpu.marca === "Intel")
    return(
        <div className="product-page">
            <PageContainer data={cpuIntel}/>
        </div>
    )
}