import re

base_str = "eagleCrest"

print("Base", base_str)

res_list = [s for s in re.split("([A-Z][^A-Z]*)", base_str) if s]

print("Result", " ".join(res_list).title())
