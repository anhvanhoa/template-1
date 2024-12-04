import { ContextPageStatic } from "@/providers/ProductProvider"
import { useContext } from "react"

const usePageStatic = () => {
    return useContext(ContextPageStatic)
}

export default usePageStatic