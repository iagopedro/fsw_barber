"use client"

import { Badge } from "@/app/_components/ui/badge";
import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";
import { Barbershop } from "@prisma/client/wasm";
import { StarIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface BarbershopItemProps {
    barbershop: Barbershop
}

const BarbershopItem = ({ barbershop }: BarbershopItemProps) => {
    const router = useRouter();

    const handleBookingClick = () => {
        router.push(`/barbershops/${barbershop.id}`);
    }

    return ( 
        <Card className="min-w-[167px] max-w-[167px] rounded-2xl">
            <CardContent className="px-1 pb-0">
                <div className="px-1 h-[159px] w-full relative">
                    <div className="absolute top-5 left-0 z-50">
                        <Badge variant="secondary" className="opacity-90 flex gap-1 items-center top-3 left-3">
                            <StarIcon size={12} className="fill-primary text-primary"/>
                            <span>5,0</span>
                        </Badge>                        
                    </div>
                    <Image 
                        src={barbershop.imageUrl}
                        alt={barbershop.name}
                        style={{
                            objectFit: "cover",
                        }}
                        fill
                        className="rounded-2xl"
                    />
                </div>

                <div className="px-2 pb-3">
                    <h2 className="font-bold mt-2 overflow-hidden text-ellipsis text-nowrap">{barbershop.name}</h2>
                    <p className="text-sm text-gray-400 overflow-hidden text-ellipsis text-nowrap">{barbershop.address}</p>
                    <Button variant="secondary" className="w-full mt-3" onClick={handleBookingClick}>
                        Reservar
                    </Button>
                </div>
            </CardContent>
        </Card>
     );
}
 
export default BarbershopItem;