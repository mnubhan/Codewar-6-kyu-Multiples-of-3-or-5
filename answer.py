def solution(number):
    totalSum=0
    newArr=[]
    for y in range(number-1):
        newArr.append(y+1) if (y+1)%5==0 or (y+1)%3==0 else newArr
    for x in newArr:
        totalSum+=x 
    return totalSum
  
def solution(number):
    return sum(x for x in range(number) if x % 3 == 0 or x % 5 == 0)

def solution(number):
    sum = 0
    for i in range(number):
        if (i % 3) == 0 or (i % 5) == 0:
            sum += i
    return sum
  
