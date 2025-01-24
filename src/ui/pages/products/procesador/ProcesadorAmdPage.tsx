import { cpus } from "../../../../data/cpus"
import { PageContainer } from "../../../containers/page/PageContainer"

export const ProcesadorAmdPage = () =>{
    const cpuAmd = cpus.filter(cpu=> cpu.marca === "AMD")
    return(
        <div className="product-page">
            <PageContainer data={cpuAmd}/>
        </div>
    )
}