import math


def is_prime(num):
    if num <= 1 or num % 1 > 0:
        return False
    if num < 10:
        for n in range(2, num // 2 + 1):
            if num % n == 0:
                return False
    else:
        for n in range(2, int(math.sqrt(num)) ):
            if num % n == 0:
                return False
    return True


print(is_prime(0))  # False
print(is_prime(1))  # False
print(is_prime(2))  # True
print(is_prime(73))  # True
print(is_prime(75))  # False
print(is_prime(-1))  # False
print(is_prime(4))  # False
