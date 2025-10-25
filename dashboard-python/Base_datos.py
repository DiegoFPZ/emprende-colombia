import pandas as pd
import matplotlib.pyplot as plt
import numpy as np
import seaborn as sns

# 1 Cargar el dataset directamente desde GitHub (Base emprendedores)
url = "https://raw.githubusercontent.com/DiegoFPZ/emprende-colombia/refs/heads/main/dashboard-python/data/datos_emprendedores.csv"
df = pd.read_csv(url,sep=";")


# Gráfico
plt.figure(figsize=(8, 5))
sns.countplot(data=df, x='NombreDepartamentoAtencion', hue='Genero')

plt.title('Distribución de Género por Departamento')
plt.xlabel('NombreDepartamentoAtencion')
plt.ylabel('Cantidad de Personas')
plt.legend(title='Género')
plt.xticks(rotation=30)
plt.tight_layout()
plt.show()



