import subprocess 
from subprocess import PIPE

comp_process = subprocess.run("python ./run.py")
print(comp_process.stdout)

