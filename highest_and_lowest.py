# def high_and_low(numbers):
#     new_numbers = []
#     for n in numbers.split():
#         new_numbers.append(int(n))
#     new_list = [str(max(new_numbers)), str(min(new_numbers))]
#     return ' '.join(new_list)
#
#
# def high_and_low(numbers):
#     n = map(int, numbers.split(' '))
#     return "{} {}".format(max(n), min(n))
#
#
# def high_and_low(numbers):
#   n = map(int, numbers.split(' '))
#   return str(max(n)) + ' ' + str(min(n))


def high_and_low(numbers): #z.
    nn = [int(s) for s in numbers.split(" ")]
    return "%i %i" % (max(nn),min(nn))



print(high_and_low("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6")) # "542 -214"