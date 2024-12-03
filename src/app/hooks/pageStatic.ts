import { ContextPageStatic } from "@/providers/pageStatic"
import { useContext } from "react"

const usePageStatic = () => {
    return useContext(ContextPageStatic)
}

export default usePageStatic