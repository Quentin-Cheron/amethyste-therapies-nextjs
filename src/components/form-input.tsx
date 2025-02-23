import { Input } from './ui/input'

export default function FormInput({
  label,
  name,
  type,
  register,
  errors,
  validation,
}: {
  label: string
  name: string
  type: string
  register: any
  errors: any
  validation?: any
}) {
  return (
    <div>
      <label htmlFor="first-name" className="block text-sm/6 font-semibold text-gray-900">
        {label} {validation?.required && <span className="text-red-600">*</span>}
      </label>
      <div className="mt-2.5">
        <Input
          {...register(name, {
            ...validation,
          })}
          type={type}
        />
      </div>
      {errors[name] && <p className="mt-2 text-sm/6 text-red-600">{errors[name].message}</p>}
    </div>
  )
}
