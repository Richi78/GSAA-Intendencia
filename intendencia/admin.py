from django.contrib import admin

from .models.intendenciaDB import Material

admin.site.site_header = "Intendencia GSAA"

# Register your models here.
admin.site.register(Material)