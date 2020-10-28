def solution(number):
    return sum([num for num in range(3, number) if num % 5 == 0 or num % 3 == 0])


print(solution(10))  # 23
