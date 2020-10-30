# def find_uniq(arr):
#     return sum([n for n in arr if arr.index(n) == len(arr) - 1
#                 or n != arr[(arr.index(n) - 1)] and n != arr[(arr.index(n) + 1)]])
def find_uniq(arr):
    a, b = set(arr)
    return a if arr.count(a) == 1 else b


print(find_uniq([1, 1, 1, 2, 1, 1]))  # 2
print(find_uniq([0, 0, 0.55, 0, 0]))  # 0.55
print(find_uniq([3, 10, 3, 3, 3]))  # 10
print(find_uniq([8, 8, 8, 8, 8, 8, 8, 7]))  # 7
