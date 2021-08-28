def convertToBinary(num):
    assert num >=0
    if (num == 0):
        return [0]
    else:
        binaryList = []
        while num > 0:
            binaryList.append(num % 2)
            num = num // 2
        return binaryList
    
def convertToDecimal(binaryList):
    actNum = 0
    i = 0
    print(binaryList)
    for index in binaryList:
        actNum = actNum + (2**i)*index
        i = i + 1
    return actNum

print(f'6 = {convertToBinary(6)}')
print(f'23 = {convertToBinary(23)}')
print(f'46 = {convertToBinary(46)}')
print(f'128 = {convertToBinary(128)}')
print(f'71 = {convertToBinary(71)}')
print(convertToDecimal([1, 0, 1, 1, 0, 1])) # should be 45
print(convertToDecimal([0, 1, 1, 0, 1])) # should be 22