def solution(n):
    result = ''
    mapping = {1000: 'M', 900: 'CM', 500: 'D', 400: 'CD', 100: 'C', 90: 'XC', 50: 'L', 40: 'XL', 10: 'X', 9: 'IX',
               5: 'V', 4: 'IV', 1: 'I'}

    while n != 0:
        for k, v in mapping.items():
            if n >= k:
                dividend = int(n / k)
                n %= k
                result += dividend * v
    return result


print(solution(1))  # 'I', "solution(1),'I'"
print(solution(4))  # 'IV', "solution(4),'IV'"
print(solution(6))  # 'VI', "solution(6),'VI'"
print(solution(14))  # 'XIV', "solution(14),'XIV"
print(solution(21))  # 'XXI', "solution(21),'XXI'"
print(solution(89))  # 'LXXXIX', "solution(89),'LXXXIX'"
print(solution(91))  # 'XCI', "solution(91),'XCI'"
print(solution(984))  # 'CMLXXXIV', "solution(984),'CMLXXXIV'"
print(solution(1000))  # 'M', 'solution(1000), M'
print(solution(1889))  # 'MDCCCLXXXIX', "solution(1889),'MDCCCLXXXIX'"
print(solution(1989))  # 'MCMLXXXIX', "solution(1989),'MCMLXXXIX'"
