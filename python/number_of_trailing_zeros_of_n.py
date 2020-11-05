def zeros(n):
    i = 5
    trail = 0
    while n >= i:
        trail += n // i
        i *= 5
    return trail


print(zeros(0))  # 0, "Testing with n = 0"
print(zeros(6))  # 1, "Testing with n = 6"
print(zeros(30))  # 7, "Testing with n = 30"
