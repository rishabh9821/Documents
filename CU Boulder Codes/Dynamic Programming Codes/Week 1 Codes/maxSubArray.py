import numpy as np
def minFunc(a,b):
    if a < b:
        return a
    else:
        return b
        
def minElement(A, lowerIndex, upperIndex):
    min = np.inf
    for index in range(lowerIndex, upperIndex+1):
        min = minFunc(min,A[index])
    return min

def maxFunc(a,b):
    if a > b:
        return a
    else:
        return b

def maxElement(A,lowerIndex, upperIndex):
    max = -np.inf
    for index in range(lowerIndex,upperIndex+1):
        max = maxFunc(max,A[index])
    return max

def maxSubArray(A, startPoint = 0, endPoint = len(A)):
    print('Entered')
    if (startPoint == endPoint):
        return 0
    elif (startPoint == endPoint - 1):
        return (A[endPoint] - A[startPoint])
    else:
        middleIndex = (endPoint + startPoint) // 2
        m1 = maxSubArray(A,startPoint = startPoint, endPoint = middleIndex)
        m2 = maxSubArray(A, startPoint = middleIndex + 1, endPoint = endPoint)
        minLeft = minElement(A, startPoint, middleIndex)
        maxRight = maxElement(A, middleIndex + 1, endPoint)
        actMax = maxFunc(maxFunc(m1,m2),(maxRight - minLeft))
        return actMax

A = [2,1,0,8,15,7,-1,6]
maxSubArray(A)


