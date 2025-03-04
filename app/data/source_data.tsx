import { StaticImageData } from "next/image";
import { IArticle } from "./article_data";
import { IFilter } from "./filter_data";
import whyDoWeLoseOurVoiceHighlights from "@/public/why_do_we_lose_our_voice_highlights.png";

export interface IDetails {
    body: string;
    article: IArticle;
    
}

export const youngKidsSourceData: IDetails[] = [
    {
        body: "That can happen when our vocal cords become irritated. The vocal cords are two folds of tissue near the top of the airway. When air from the lungs passes between them, they vibrate, making the sound we call our voice. But if strain or infection makes them irritated and swollen, they vibrate differently. That can cause a raspy, “hoarse” sound that may be difficult to hear. Some people call that “losing your voice.”",
        article: { 
            name: "Why do we lose our voice?", 
            img: whyDoWeLoseOurVoiceHighlights, 
            statusId: "rNtJ7GnFBy4jgyUC", 
            ageRangeId: "FpxVKwxvayQwYV3L",
            source: { id: "B1DKDDNmgsn2YxLR", name: "Highlights" }  // Add this
        },
    
    },
    
];
