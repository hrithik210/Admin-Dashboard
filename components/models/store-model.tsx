"use client"

import { useStoreModel } from "@/hooks/use-store-model"
import { Model } from "../ui/models"

export const storeModel = () =>{
 const storeModel  = useStoreModel()
 return(
    <Model 
        title="store"
        description="A store is a place where you can buy things."
        isOpen={storeModel.isOpen}
        onClose={storeModel.onClose}
        >
        Create store form

    </Model>
 )
}