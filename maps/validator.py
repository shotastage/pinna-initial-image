

class Validation():

    def empty(self, value):
        for i in value:
            if len(i) == 0:
                return True
                break
            else:
                return False