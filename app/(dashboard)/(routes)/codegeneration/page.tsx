import { Heading } from "@/components/heading";
import { CodeIcon} from "lucide-react";


const CodeGeneration = ()=>{
    return(
        <div>
           <Heading 
          title="Code Generation"
          description="Most advanced Code Model"
          icon={CodeIcon}
          iconColor='text-emerald-500'
          bgColor="bg-emerald-500/10"
          
          
          />
        </div>
    )
}
export default CodeGeneration;