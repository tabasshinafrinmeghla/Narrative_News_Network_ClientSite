/**
 * custom hooks jeta diye amr je khane jabo sei sate title e dekhabe 
 * 
 * */
import { useEffect } from "react"
const useTitle = title => {
  useEffect(() => {
    document.title = ` Narrative - ${title}`;
  }, [title])

};

export default useTitle;