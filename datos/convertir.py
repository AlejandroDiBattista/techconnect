from PIL import Image
import os

def center(origen, destino):
    # Abrir la imagen
    img = Image.open(origen)
    
    # Definir el tamaño de salida 1024x1024 con márgenes de 20px
    margin = 20
    target_size = (1024 - 2 * margin, 1024 - 2 * margin)
    canvas_size = (1024, 1024)
    
    # Crear un lienzo blanco de 1024x1024
    new_img = Image.new("RGB", canvas_size, (255, 255, 255))
    
    # Redimensionar la imagen manteniendo la proporción
    img.thumbnail(target_size, Image.LANCZOS)
    
    # Obtener las coordenadas para centrar la imagen con márgenes
    img_width, img_height = img.size
    left = (canvas_size[0] - img_width) // 2
    top  = (canvas_size[1] - img_height) // 2
    
    # Pegar la imagen redimensionada en el lienzo
    new_img.paste(img, (left, top))
    
    # Guardar la imagen resultante
    new_img.save(destino)

# Ejemplo de uso

def process_images():
    # Obtener lista de archivos .jpg en el directorio actual
    jpg_files = [f for f in os.listdir('.') if f.endswith('.jpg') and f[:-4].isdigit()]
    
    print(f"Se encontraron {len(jpg_files)} imágenes")
    for file in jpg_files:
        # Generar nuevo nombre con prefijo 'i'
        print(f"Procesando {file}")
        new_name = 'i' + file
        # Convertir y guardar la imagen
        center(file, new_name)

# Ejecutar la función
process_images()