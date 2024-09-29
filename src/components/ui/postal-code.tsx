import React, { useState, useRef, KeyboardEvent, forwardRef, useImperativeHandle } from 'react'
import { Input } from "@/components/ui/input"

export interface OTPInputProps {
    length?: number;
    onComplete?: (otp: string) => void;
    onChange: (value: string) => void
    disabled?: boolean;
    autoFocus?: boolean;
    value: any;
}

export interface OTPInputRef {
    focus: () => void;
    clear: () => void;
}

const PostalCode = forwardRef<OTPInputRef, OTPInputProps>(({
    length = 6,
    onComplete,
    onChange,
    disabled = false,
    autoFocus = false,
    value
}, ref) => {
    const [otp, setOtp] = useState<string[]>(value)
    const inputRefs = useRef<(HTMLInputElement | null)[]>([])

    useImperativeHandle(ref, () => ({
        focus: () => inputRefs.current[0]?.focus(),
        clear: () => {
            setOtp(Array(length).fill(''))
        }
    }))

    const handleChange = (element: HTMLInputElement, index: number, onChange: (value: string) => void) => {
        const value = element.value.toUpperCase()
        if (index !== 1 && index !== 3 && index !== 5) {
            if (!/^[A-Z]$/.test(value) && value !== '') return
        } else {
            if (!/^[0-9]$/.test(value) && value !== '') return
        }

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



    // useEffect(() => {
    //     if (value && typeof value === 'string') {
    //         const initialOtp = value.split('').concat(Array(length).fill('')).slice(0, length)
    //         setOtp(initialOtp)
    //     }
    // }, [value, length])

    return (
        <div className='flex-1'>
            <div className="flex justify-start gap-0 postalCode">
                {Array.from({ length }).map((_, index) => (
                    <React.Fragment key={index}>
                        <Input
                            type="text"
                            inputMode={index === 1 || index === 3 || index === 5 ? "numeric" : "text"}
                            pattern={index === 1 || index === 3 || index === 5 ? "[0-9]" : "[A-Za-z]"}
                            maxLength={1}
                            ref={el => inputRefs.current[index] = el}
                            value={otp[index] || ''}
                            onChange={e => handleChange(e.target, index, onChange)}
                            onKeyDown={e => handleKeyDown(e, index, onChange)}
                            onPaste={e => handlePaste(e, onChange)}
                            disabled={disabled}
                            autoFocus={autoFocus && index === 0}
                            className="max-w-10 text-center p-0 uppercase !border-none postalCode rounded-none"
                            aria-label={`Digit ${index + 1} of postal code`}
                        />
                        {index === 2 && (
                            <div className="flex items-center justify-center w-4">
                                <span className="text-2xl text-gray-400" aria-hidden="true"></span>
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    )

})

PostalCode.displayName = 'PostalCode'

export default PostalCode