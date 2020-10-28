# def open_or_senior(data):
#     return_list = []
#     for customer in data:
#         age, handicap = customer
#         if age > 54 and handicap > 7:
#             return_list.append("Senior")
#         else:
#             return_list.append("Open")
#     print(data)
#     return return_list
def open_or_senior(data):
    return ["Senior" if age >= 55 and handicap >= 8 else "Open" for (age, handicap) in data]


print(open_or_senior([(45, 12), (55, 21), (19, -2), (104, 20)]))  # ['Open', 'Senior', 'Open', 'Senior']
print(open_or_senior([(16, 23), (73, 1), (56, 20), (1, -1)]))  # ['Open', 'Open', 'Senior', 'Open'])
