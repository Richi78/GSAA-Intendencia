from django.db import models

# Create your models here.

class Material(models.Model):
    ESTADOS_MATERIAL = (("B", "Bueno"), ("R", "Regular"), ("M", "Malo"))
    material = models.CharField(max_length=50) 
    estado = models.CharField(max_length=1, choices=ESTADOS_MATERIAL)
    observaciones = models.TextField(max_length=1000)
    ultimaActividad = models.TextField(max_length=200)
    ubicacion = models.TextField(max_length=100)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return f"Material: {self.material}, Estado: {self.estado}, UltimaActividad: {self.ultimaActividad}, En: {self.timestamp}"