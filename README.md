# Sentia Vol. 1 - Landing Page

> Landing page profesional para el eBook infantil **Sentia Vol. 1 - Historias para sentir en grande**

## Tecnologias

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- ESLint

---

## 1. Instalacion de dependencias

```bash
npm install
```

## 2. Correr localmente

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 3. Reemplazar enlaces de venta

Abre el archivo `src/app/page.tsx` y edita las siguientes constantes al inicio del archivo:

```typescript
const HOTMART_URL = 'PEGAR_ENLACE_HOTMART';       // <-- tu link de Hotmart
const LEAD_MAGNET_URL = 'PEGAR_ENLACE_GUIA_GRATIS'; // <-- tu link de la guia gratuita
```

Todos los botones de la landing usan estas constantes automaticamente.

## 4. Agregar imagenes

Coloca tus imagenes en la carpeta `public/images/` con estos nombres exactos:

```
public/images/sentia-cover.png        # Portada del eBook
public/images/sentia-preview-1.png    # Vista previa interior 1
public/images/sentia-preview-2.png    # Vista previa interior 2
public/images/kokoa.png               # Imagen de personaje/marca
public/images/lead-magnet-cover.png   # Portada de la guia gratuita
```

Si no colocas imagenes, la landing muestra placeholders elegantes automaticamente.

## 5. Deploy en Vercel

### Opcion A: Desde vercel.com (recomendado)

1. Entra a [https://vercel.com](https://vercel.com)
2. Haz clic en **Add New Project**
3. Conecta tu cuenta de GitHub si no lo has hecho
4. Busca y selecciona el repositorio `sentia-landing`
5. Vercel detecta Next.js automaticamente
6. Haz clic en **Deploy**
7. En 2-3 minutos tendras tu URL publica

### Opcion B: Desde Vercel CLI

```bash
npm install -g vercel
vercel login
vercel --prod
```

## 6. Agregar Google Analytics y Meta Pixel

Abre `src/app/layout.tsx` y descomenta los bloques comentados para agregar:

- **Google Analytics**: reemplaza `G-XXXXXXXXXX` con tu ID de GA4
- **Meta Pixel**: agrega tu codigo de pixel en el bloque correspondiente

## 7. Checklist antes de publicar

- [ ] Reemplace `PEGAR_ENLACE_HOTMART` con el link real de Hotmart
- [ ] Reemplace `PEGAR_ENLACE_GUIA_GRATIS` con el link real de la guia
- [ ] Agregue las imagenes en `public/images/`
- [ ] Revise que los textos esten correctos
- [ ] Configure Google Analytics (opcional)
- [ ] Configure Meta Pixel (opcional)
- [ ] Pruebe en celular antes de lanzar
- [ ] Verifique que todos los botones funcionen
- [ ] Haga deploy en Vercel
- [ ] Conecte su dominio personalizado si tiene uno

## IDs de rastreo en botones

| ID | Seccion |
|---|---|
| `cta-hero-compra` | Boton principal del Hero |
| `cta-hero-guia` | Boton guia gratuita del Hero |
| `cta-lead-magnet` | Seccion Lead Magnet |
| `cta-final-compra` | CTA final de la pagina |

---

Hecho con amor para familias que leen juntas.
