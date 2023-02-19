import faqsData from "../public/Assets/faqs";
import Faq from "../Components/Faq";

export default function Faqs() {
    return (
        <div className="faqsWrapper">
            <h1 className="faqsHeading">Frequently Asked Questions</h1>
    
            {faqsData.map((faq, index) => (
                <Faq key={index} question={faq.question} answer={faq.answer} />
            ))}
            
        </div>
    )
}