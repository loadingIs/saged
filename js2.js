@interact
def myplot(f=x^2-x-3):
	show(plot(f, (f, -3, 3), figsize=4))