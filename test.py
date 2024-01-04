def counter(fn):
    count = 0
    def inner(*args, **kwargs):
        nonlocal count
        count += 1
        print('Function {0} was called {1} times'.format(fn.__name__, count))
        return fn(*args, **kwargs)
    return inner


def add(a:int, b:int=0):
    """
        adds two numbers
    """
    return a+ b


add = counter(add)

add(10,20)