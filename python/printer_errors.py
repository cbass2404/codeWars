# def printer_error(s):
#     total = 0
#     for l in s:
#         if ord(l) not in range(97, 110):
#             total += 1
#     return f'{total}/{len(s)}'

def printer_error(s):
    return "{}/{}".format(len([x for x in s if ord(x) not in range(97, 110)]), len(s))


print(printer_error("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"))
# 3/56