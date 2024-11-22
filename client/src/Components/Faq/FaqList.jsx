import { faqs } from './../../data/FAQ';
import FaqItem from './FaqItem';

const FaqList = () => {
  return (
    <ul className="mt-[38px]">
      {faqs.map((item, index) => (
        <FaqItem key={index} faq={item} /> 
      ))}
    </ul>
  );
}

export default FaqList;
