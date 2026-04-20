#!/bin/bash
DEST="/Users/luissalascortes/Library/Mobile Documents/com~apple~CloudDocs/Proyectos Windsurf/ruralpass-website/public/images"

URLS=(
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA2SqU6LEGNv8sg6-deIfIjHElId19amHVkvkkv_j5jUGRG59AbABT2oMRD1NEQgNQpsKcAXH5NxleX5aY-mE_OENdM8LTuveMM9I_637b0vf7suphdOQxHDPuxyLVyORf15piyo6YzkVo15J6QNUw4KG09sZS8lmG0Uli7DhqNURvLqVIV0VzWplLXN6hQ9PRUiYHApJBiksJyMtrEUeP9uZJMPDlmGCaH8iuWlczq67jNUPMtbhPP6RRuMxOZdz7hQjDKk_W9Mo_p"
  "https://lh3.googleusercontent.com/aida-public/AB6AXuALZHvzhNZcjLxKVHSeyC5VJYh8rrCKey7rcPXZdYE033lAZH_7T7PtWaaej3l9O_0vgkL6eDLMKmotkuT5U9qFGFhumg2Bd9D2tEx_0XmRempdiIcT1I6eqbMNO6IQ9_MOi9USBtrFnYLKPcv_Mr0CQzs7lrp1QUlQPtI6hRWc-NPuAgbfQR0Qs70Ywji9JbFCbkeiaayK4oLuhUwo6NGrVh_ysNUp33ki0DqWpOA_dKmAt8OwzCZ8DN8ohsd0MkDfttsVWQ_xqLxq"
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAs59LWK2L9Y0UbenHHl9TL3PkKHPYdCcjCWX6eQh8sMV5v3RRpYAlyLe4ScMjTV8SqBzilZD55iGvUgBL3d-qbHRWPCem6ZpkSIbm6JKWFvEoiS2MCTeufMU6V8Wc680jhlk6kl0JL_AkSZWRdsdiQhmwWF0g0DfK4lgMsLeoB4yuAO03KDlrKpWnGCvG5s0fXLOl2tGBd3m9ba76oweVwPEzbP0eqSTt2fa4jeTGUljPITsZBU6mGQ39XA-TWSL10Bz_V48urhRM1"
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAvie0gSGNJ7zy2hTu-2CpoSRQWUeMwAtXJdAPmZKMiH4YqX_-68Gf39TqxiMyl5SYndFTLOJct2Far0FhxjoQo3OoENmcMLcNL4rCk4woXTBB792BTBYDQG4efs1-r-eaWemlMgO2Uj5ASfp7PD8i5ZQDgndYEicEC7F-WmxVPQpFJtb7rLjpaEew0qo8CpFR-AMny7_66DKjlJFp6oc96aIl_6kozL7dzJ5-rhFI6s5Rhq-yG3N2KqQjhA4wHdbnq83n2sbrI-QCy"
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAvie0gSGNJ7zy2hTu-2CpoSRQWUeMwAtXXJdAPmZKMiH4YqX_-68Gf39TqxiMyl5SYndFTLOJct2Far0FhxjoQo3OoENmcMLcNL4rCk4woXTBB792BTBYDQG4efs1-r-eaWemlMgO2Uj5ASfp7PD8i5ZQDgndYEicEC7F-WmxVPQpFJtb7rLjpaEew0qo8CpFR-AMny7_66DKjlJFp6oc96aIl_6kozL7dzJ5-rhFI6s5Rhq-yG3N2KqQjhA4wHdbnq83n2sbrI-QCy"
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB5hVvs7FQfiqgswxmET1EXga5wv8B7v6fXqPlWaNIiZV-35Z5gSgjT0Qk880-9xOnK0XW-KmaQsEg-xSZ-iaYObRfZ4rhkGZKjXWh76AAZvww0D0AOkQUwVHjFDAgDGfexBl3C6RwN84MJzFI0m1rsikGxIBDMmLbZh1h8xq_Eo3F1gp7kePxCEUJSSglDvmg61NmkeBi53RwUDMNeOo3rLon_5foDwBL8AJnwoZXZTAMIn0pYm7KTWf2XS4UHd3J7WmVqGCQChWpc"
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBJ5SuRAlJRpptqNjNeP1_K9kZQrL-GqUzHpmPGMgkJtZPpJyY_Z1GhdLWgvkJBDOCSq-6zgADZ-Nf-NSfO9xFoGydpHp0W8oz8qQfiAwOzPzG_S2bp0wfkYrp0TBXeebrhutlV3ha3SjgEjRULhCrgx_08llKQqlJSVl0Edt3h9Vqxo11a0pXO0UJ4Zb6Q629veoi-YPiI2dkYm9EbsuE5YYcKBhzzuCccBKUMZSIg-0KVPfo0quQ7QIWb6z6EgIQ8Ullzr_jSHsFO"
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBmgWq-2G-__jtiIlNKT6JUmpIZlenABJlOSEKNGf9j0CR_A1n_6RPel3-LekkrcMmCvMTGqBIqD9wfqxTF3o6BDCGu8g4awLVLChCaW5MBv5d0FT8qDdcZgtnbwfL0_fmLsW-3IyoVDatLYI6AD3jVQcdRwAVYmEjzJaCxa3JPRhsm8ZDk9IUGmaDeAu8TE-iRw4MYRB21dc8aHm8tKD1Rl3y-a6TYQmrPJRxLYLtkf0zzRk3LBtOT372h4Hb8K033oc5fCX0YObqQ"
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD2XBvY9ZSSMHvG1jvlES7iQ9arFgO0snCdgzJSDkRZr42aY1OJtUxa0aOA7lBTNshk8KhTv8wtCtPq3j2tCfwoHPYgjwmcR44EHJxLkVClwJjBryxOzDW4sFs5YWTrCGwRDrdIwf08ESC7eM_aAy0W62Du9FH0jBJYNU0VXoR0_6LtPQZ3ZR3c1v-CPWiIvPrDoOwgs7cug6k_PkB4blkR6nuZsstcz3hokPbnl391T9Ga3BUb-d6UNioJ8WmxP91AHNZSz-MWYWx6"
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDlDZfz_RMpbFLzatfRaRxPjPV_LyXi1ck-k0zvteOkoxXE3vFqL4wnggXLmBxp0m5GPD_KNdKLCUsWaRD9c-WYcc4v_KWKZTMlMdsOV2iJ5O46coHSVbWknad0s1dveZHMp_AaQW5WeJtOKVk-rSmKbmg3mdzz5fC36pcR_FCLIp3mq0UU2rwf1MNVfYybjX96yQt5CialLrTGac2rp9pCI-xKirWRbpush6EagoEJiB_FKlkPQbhssqMy4jqDQbNve2j2rqQWeA_k"
)

NAMES=(
  "img-camara-seguridad"
  "img-solar-offgrid"
  "img-solar-banner-servicios"
  "img-contacto-terreno-a"
  "img-contacto-terreno-b"
  "img-solar-panel-close"
  "img-telecomunicaciones-rural"
  "img-baterias-inversores"
  "img-casa-rural-solar"
  "img-mantencion-fotovoltaica"
)

for i in "${!URLS[@]}"; do
  NAME="${NAMES[$i]}"
  TMP="/tmp/${NAME}.png"
  WEBP="${DEST}/${NAME}.webp"
  echo "Descargando ${NAME}..."
  curl -sL "${URLS[$i]}" -o "${TMP}"
  /opt/homebrew/bin/cwebp -q 82 "${TMP}" -o "${WEBP}" -quiet && echo "OK: ${NAME}.webp"
  rm -f "${TMP}"
done

echo "Listo. Avisa a Cascade para actualizar el codigo."
