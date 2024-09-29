import React, { useState, useRef, KeyboardEvent, forwardRef, useImperativeHandle } from 'react'
import { Input } from "@/components/ui/input"
import { useFormContext, Controller } from "react-hook-form"

export interface OTPInputProps {
    name: string;
    length?: number;
    onComplete?: (otp: string) => void;
    disabled?: boolean;
    autoFocus?: boolean;
}

export interface OTPInputRef {
    focus: () => void;
    clear: () => void;
}

const OTPTextInput = forwardRef<OTPInputRef, OTPInputProps>(({
    name,
    length = 6,
    onComplete,
    disabled = false,
    autoFocus = false
}, ref) => {
    const { control } = useFormContext()
    const [otp, setOtp] = useState<string[]>(Array(length).fill(''))
    const inputRefs = useRef<(HTMLInputElement | null)[]>([])

    useImperativeHandle(ref, () => ({
        focus: () => inputRefs.current[0]?.focus(),
        clear: () => {
            setOtp(Array(length).fill(''))
        }
    }))

    const handleChange = (element: HTMLInputElement, index: number, onChange: (value: string) => void) => {
        const value = element.value.toUpperCase()
        if (!/^[A-Z0-9]$/.test(value) && value !== '') return

        const newOtp = [...otp]
        newOtp[index] = value
        setOtp(newOtp)

        const otpValue = newOtp.join('')
        onChange(otpValue)

        if (value !== '') {
            if (index < length - 1) {
                inputRefs.current[index + 1]?.focus()
            } else {
                element.blur()
                onComplete?.(otpValue)
            }
        }
    }

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number, onChange: (value: string) => void) => {
        if (e.key === 'Backspace') {
            if (index > 0 && otp[index] === '') {
                const newOtp = [...otp]
                newOtp[index - 1] = ''
                setOtp(newOtp)
                onChange(newOtp.join(''))
                inputRefs.current[index - 1]?.focus()
            }
        }
    }

    const handlePaste = (e: React.ClipboardEvent, onChange: (value: string) => void) => {
        e.preventDefault()
        const pastedData = e.clipboardData.getData('text').toUpperCase().replace(/[^A-Z0-9]/g, '')
        const pastedArray = pastedData.slice(0, length).split('').concat(Array(length).fill('')).slice(0, length)
        setOtp(pastedArray)
        onChange(pastedArray.join(''))
        inputRefs.current[length - 1]?.focus()
    }

    return (
        <Controller
            name={name}
            control={control}
            rules={{ required: "OTP is required", validate: value => value.length === length || `OTP must be ${length} characters` }}
            render={({ field: { onChange }, fieldState: { error } }) => (
                <div className='flex-1'>
                    <div className="flex justify-center gap-1">
                        {Array.from({ length }).map((_, index) => (
                            <React.Fragment key={index}>
                                <Input
                                    type="text"
                                    inputMode="text"
                                    pattern="[A-Za-z0-9]"
                                    maxLength={1}
                                    ref={el => inputRefs.current[index] = el}
                                    value={otp[index]}
                                    onChange={e => handleChange(e.target, index, onChange)}
                                    onKeyDown={e => handleKeyDown(e, index, onChange)}
                                    onPaste={e => handlePaste(e, onChange)}
                                    disabled={disabled}
                                    autoFocus={autoFocus && index === 0}
                                    className="lg:w-12 lg:h-12 text-center p-1 sm:text-2xl uppercase"
                                    aria-label={`Digit ${index + 1}`}
                                />
                                {index === 2 && (
                                    <div className="flex items-center justify-center w-4">
                                        <span className="text-2xl text-gray-400" aria-hidden="true">-</span>
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                    {error && <p className="mt-2 text-sm text-red-600">{error.message}</p>}
                </div>
            )}
        />
    )
})

OTPTextInput.displayName = 'OTPTextInput'

export default OTPTextInput