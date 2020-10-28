def high_and_low(numbers):
    new_numbers = []
    for n in numbers.split():
        new_numbers.append(int(n))
    new_list = [str(max(new_numbers)), str(min(new_numbers))]
    return ' '.join(new_list)

print(high_and_low("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6")) # "542 -214"