
const DateComponent =()=>(
<div>
<div>

{new Date().toLocaleString("en-GB", {
              weekday: "long",
              //day of week
            })}
            
{new Date().toLocaleString("en-GB", {
              month: "long",
              //month
            })}
<em>          
{new Date().toLocaleString("en-GB", {
              day: "numeric",
              //day of month
            })}
</em>  
{new Date().toLocaleString("en-GB", {
              year: "numeric",
              //day of month
            })}
</div>

</div>

    
)
export default DateComponent;