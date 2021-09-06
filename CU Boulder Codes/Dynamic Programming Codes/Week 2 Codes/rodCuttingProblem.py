sizes = [1,3,5,10,20,50,75]
prices = [.1, .2, .4, .9, 3.1, 5.1, 8.2]
length = 100

def maxRevenue(L, sizes, prices):
    if (L <= 0):
        return None
    elif(len(sizes) != len(prices)):
        return None
    else:
        maxRevRolling = 0
        for sizePriceIndex in range(len(sizes)):
            currentRev = L - sizes[sizePriceIndex] + prices[sizePriceIndex]
            maxRevRolling = max(maxRevRolling, maxRevenue(currentRev, sizes, prices))
        return maxRevRolling
