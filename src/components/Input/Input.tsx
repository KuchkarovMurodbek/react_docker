interface ITypes{
  type:string
  label:string,
  value:string,
  onChange:()=>void,
  placeholder:string,
  error:string
}
export function Input({ type,label, value, onChange, placeholder,error }:ITypes) {
  return (
    <div className="flex flex-col gap-0.5 mx-3">
    <label htmlFor={label} className="text-base font-normal">{label}</label>
    <input
      id={label}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="py-2 pl-1   outline-none  focus:outline-slate-700 focus:transition-all" 
    />
     {error && <span className="text-red-500 text-xs">{error}</span>}
  </div>
  )
}

