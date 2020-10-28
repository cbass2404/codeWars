# def digital_root(n):
#     result = 0
#     for digit in str(n):
#         result += int(digit)
#     while result > 9:
#         new_result = 0
#         for digit in str(result):
#             new_result += int(digit)
#         result = new_result
#     return result
def digital_root(n):
    return n if n < 10 else digital_root(sum(map(int, str(n))))


print(digital_root(16))
print(digital_root(942))
print(digital_root(132189))
print(digital_root(493193))
