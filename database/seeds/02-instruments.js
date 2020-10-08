
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instruments').del()
    .then(function () {
      // Inserts seed entries
      return knex('instruments').insert([
        {id: 1, 
        name: 'Fender Kurt Cobain Jaguar NOS Electric',
        description: 'Fender Kurt Cobain Jaguar is a new-looking version of the battered and highly unusual 1965 Jaguar that Cobain wielded during the heady early 90s era when Nirvana ruled rock and led a musically stunning and culturally subversive movement.',
        features: 'Alder Jaguar body,Maple neck with modern C shape,Rosewood fretboard with 9.5 radius,22 medium jumbo frets,DiMarzio humbucking pickups,Adjusto-Matic bridge and Gotoh sealed tuners,Stratocaster headstock,Toggle pickup selector switch,Custom Fender engraved neckplate,White bound fingerboard,50s style spaghetti logo decal,Knurled chrome dome control knobs',
        make: 'Fender',
        price: 1224,
        img_url: 'https://previews.dropbox.com/p/thumb/AA_H2qKZbABX8dEz94GavYbSj7pIMwLSVrTRk_2pji4bSGXac8_n6dzVajiwr3SOEm4AUu_Nssank18YypPVHT_mM46l_ymTloHdjjTgPFdI_FO_kJYpEJB8k9jToqhrNo_WtadjFHqNU5a3T6o62DZxf0oKEEPSU2gXN7OgLiZ0pFiWhGBsP99IaGyV4uipHqX3pDT_8-UHgXxI0QK68IVGzj0E4lqgRyrAvTmAZY6M5UPbIHNFiXWEKdB-liohyjtfrUCkIvKC6tqdUl6C-7Opsnd0xc-vE6I34Nu3cZHi4oz4fntwwddnYnp-ZKixA9Lq4IOZTcghCTyjg7OqdVxLHOS5F_EAdTyeZb_xmiexnw/p.png?fv_content=true&size_mode=5',
        category_id: 1
      },
      {id: 2, 
        name: 'Fender American Professional Jazz',
        description: 'Pushing craftsmanship to its limits, Fender design, test and endlessly experiment to create the best instruments on the planet. The Jazz Bass, a refinement of concepts first introduced in the Precision Bass, is the earliest example of this philosophy in action.',
        features: 'Rosewood,Radius: 9.5 in.,Fret size: Narrow Tall, Number of frets: 20, Inlays: Dot, Nut material: Bone, Nut width: 1.5 in. (38.1mm) ',
        make: 'Fender',
        price: 1549,
        img_url: 'https://previews.dropbox.com/p/thumb/AA8r_BKfCjz2Z5uFnLOmdRIlSgVpJAuVOGLMp2zMUCDOmP56fPpRnCs37_07x1ZVjGryedgnmi3RrilpLa8G-yRWj13MsNNEwx4HfkGQOTGX1bInXt99jCQjn9s8WqnOeYh5w8zlBaQB_NByM4HhjameMIlWaAR4hpHtzKsHgy_3l0HqcvJRv67NM2ie7ZlaX18RBYdxKT_q2b7XoHzzFM6lHEwFRU9JFiKLHcnXVZwLz9wE5-ifRei37x-Qjs05zj0pVTxOX_LGZxPZUo9DPyNAZyFe4E5tFRb3eVPxmTAcJRv7s39XVeTn-H_4cPwVZkNupLgXpeejLuanT-3wijUoGJDXiP-m0MHkjKWDTq8X4Q/p.png?fv_content=true&size_mode=5',
        category_id: 2
      },
      {id: 3, 
        name: 'Korg MS-20 Mini Analog Monophonic Synth',
        description: 'The sound of the inimitable MS-20 is now available to all with the new MS-20 Mini. The same engineers who developed the original MS-20 have perfectly reproduced its circuitry and fit it into a body 86% of the original size. The MS-20 mini will amaze with its absolutely authentic, analog synth sound.',
        features: 'Overseen by the engineers of the original MS-20,Self-oscillating high-pass/low-pass filters with distinctive distortion,External signal processor (ESP),Extremely flexible patching system,USB MIDI plus 5-pin MIDI In ',
        make: 'Korg',
        price: 529,
        img_url: 'https://cdn.korg.com/es/products/upload/13d6c3ef29f428d6df620c7e7b063c49_sp.png',
        category_id: 3
      },
      {id: 4, 
        name: 'Gretsch Guitars G5230T Electromatic Jet',
        description: 'In its 65 year existence the Gretsch Jet has been the hallmark sound for iconic players. The all-new G5230T Electromatic Jet FT Single-Cut with Bigsby captures that essential Jet power and fidelity at an incredible price.',
        features: ' Chambered Mahogany body, Maple top, Gloss finish, Mahogany set-in neck, Black Walnut fingerboard, 22 Medium Jumbo frets, 2 Black Top Filter Tron Pickups Humbucking pickups, 3-way switch, Diecast tuners with Round Button, Anchored Adjusto-Matic bridge, Bigsby tailpiece, Chrome hardware ',
        make: 'Gretsch',
        price: 599,
        img_url: 'https://previews.dropbox.com/p/thumb/AA8ME2MiJB4w89HnmCDw4KzdEpVOgJyc4knSAixhhfwDfNWeD8ovEBosFoOXSIMViq7xIgr2SomZS9wqvT9ZF50F4aLmrnvPiV6H8x4xn6ugSH3Y3KHNUp0s1XKfJl2c03dBdkZqJ43i1_ZLtW918nk5pWwFrJ2MIDgiKnZpJRVDNezVYOnikfk2Czhq0w4750cfmfgLSZa3FtLg417gaoDDnLSiQyOp2pJYYW9qdhsjdmmway3-HVlLrdNWmWSBbUyNzd_CjptT3p8nOdQIK7yrp_qY2B6JVGz8wcAOXdMWhaT7Uq-XSL2uQf4OjcNB9h0j_Tgv-DM5fZNOUoohFpv_9v6Sd6mGDlJnlXbWK8ggTQ/p.png?fv_content=true&size_mode=5',
        category_id: 1
      },
      {id: 5, 
        name: 'Sterling by Music Man StingRay',
        description: 'The Sterling by Music Man StingRay "Ray34" features an all-new roasted maple neck, 3-band active preamp, modern contoured body and a bridge modeled after the iconic Ernie Ball Music Man StingRay. Includes gig bag.',
        features: 'Modern contoured swamp ash body with gloss finish, Bolt-on roasted maple neck with 21 medium frets, Sterling by Music man humbucker with active EQ, Chrome hardware includes adjustable bridge and open-gear tuners',
        make: 'Sterling',
        price: 599,
        img_url: 'https://previews.dropbox.com/p/thumb/AA-2DzfcZKxc13dhdeiTXDbgYKD_bx5u6qrR8dJBiRrgJM6zyhcXyiZvw6vAXf0huX5XfJAoml7capSQ1pKbavCh1vpbNEkMlNXR25fWqjuZ6IVx90epK9n-yxmuvHlZHheGPPI57__KyOFgq9PORzwklAIm3rdj_11qLj0D_DYQdIgKOfjEySKMaRq78GL6WTnMu0IF0KQ3LTObvAeyzXSvtN_UNXuxIhHa7B1UAZibMAaTXcXG0orLMmT0om5R2Ivlyys5flgvFHRlcNtxWZPDNsB5-Zue-U7jfHcW3jFdyhdXjRCqI1I2X9T1YnYQIs6XCc_676vUDe0bHuWI46Bq-kTfXnTBUa1fnXVwmHZkkQ/p.png?fv_content=true&size_mode=5',
        category_id: 2
      },
      {id: 6, 
        name: 'Roland JD-Xi Synthesizer',
        description: 'What do you get when you combine an interactive analog synthesizer with real-time parameter control and a keyboard with one of the most popular and highly rated digital sound libraries in the world? You get the Roland JD-Xi, an analog/digital crossover synthesizer that is the perfect instrument to address your needs.',
        features: 'Warm and rich analog sounds, Crystal clear digital timbres, Vocoder and effects, Easy programming',
        make: 'Roland',
        price: 599,
        img_url: 'https://previews.dropbox.com/p/thumb/AA_HP38beLOitj1YboSr-Ihy_EWg5mHPM4G-V9TpHlvJ2p926P7ldCU2MT9trv00ScBXvEkv-PQjTg5xE3jYNKldSlpg_JQSTKr2_gPgbDX7j9gR0GKeJaGFcZhLV2y0kjVt1lG_CxT4kQNPMDsfSaW_K3_GKLMr5BdbHNqHzdECE2Tv4BRRnJb9zoKc6hRp_WliYL9QqWWGvN86hlVE4UJnAs_-AQif18XL04OjZjl-E0AbgYgW-Hl_mBqDMHFZp00s62pOdNzZGYOo_w2xZ4tnZX-iOJqStHQp7DYsBp6kq12RUVISp0o-B-jRG73mmrmxxP5ketFOsY1ROQj0PdTzJMYkIO93pn7ibl-JY_0wog/p.png?fv_content=true&size_mode=5',
        category_id: 3
      },
      {id: 7, 
        name: 'Taylor GS Mini-e Rosewood Acoustic-Electric Guitar',
        description: 'Theres something undeniably inviting about the Taylor GS Minis scaled-down size, yet a single strum reveals the impressive voice of a full-size guitar. That mix of portability and musicality has proven to be a winning combination that fits into so many scenarios in life, from the couch to the campfire to the concert hall. ',
        features: 'There is something undeniably inviting about the Taylor GS Minis scaled-down size, yet a single strum reveals the impressive voice of a full-size guitar. That mix of portability and musicality has proven to be a winning combination that fits into so many scenarios in life, from the couch to the campfire to the concert hall. It is not too big, it is not too precious, and it is not too expensive. That broad-based accessibility has given it a resounding universal appeal, not to mention a built-in fun factor. The shorter 23-1/2-inch scale length makes forming chords a breeze yet gives the instrument plenty of snap and tuning stability for a rewarding playing experience. The acoustic-electric versions enjoy a sweet upgrade with Taylors ES2 electronics. All GS-Mini models include a durable hard bag built by Taylor for the optimal fit.',
        make: 'Taylor',
        price: 699,
        img_url: 'https://previews.dropbox.com/p/thumb/AA-EjvWfjTgbqLhg2wnH5HqkZqOFa_7ZJnMRU9PDQHM8tcrtf1dkHAMya2sVw7jgGAW0MNR1ZdCrH9S7fDOVWmjJnxKYPCgvF9MiE-If5p8V8IvcCGpD6V5p7EG2nPXa-nw6oytN1vaWfyKSB6SFkCURKL-BeOMuZlZb4QZR6K36Z0K5lpilh4LphzT9gKggRUDAWtclLVl7wZ62QZuwgyQyRCqceJNepbwiNX1lir3-wMz1FlmAkzril_AeeiAW5xiH85ArNvlvTU3LaWYIsz6u_7NAPFL8ewM8SL1DjVzDfmQ2yOUD86LTm0_bKfWzVM8dJKKjd0t7uDy4pvyrUyIjNzNnqbiraeNWpivRxm_agQ/p.png?fv_content=true&size_mode=5',
        category_id: 1
      },
      {id: 8, 
        name: 'ESP LTD B-205SM 5-string Electric Bass',
        description: 'The ESP LTD B-205SM 5-String Electric Bass Guitar has a bright-sounding ash body with a beautiful spalted maple top. Featuring string-thru design and active electronics, this bass has sound features that will inspire you.Built with 5-piece maple for maximum stability.',
        features: 'The ESP LTD B-205SM 5-String Electric Bass Guitar has a bright-sounding ash body with a beautiful spalted maple top. Featuring string-thru design and active electronics, this bass has sound features that will inspire you. Built with 5-piece maple for maximum stability, the bolt-on neck is set deep into the body for a winning combination of snap and sustain. The Thin U Neck Contour gives your fingers optimum access to the full scale of the 24-fret neck. The LTD B-205SM has 5 controls for dialing in just the right sound for the song. A balance control allows you to blend the output of the 2 pickups - full neck, full bridge, or anywhere in between. Separate bass, mid, and treble boost/cut controls enable further tone tweaking of your blend setting. A master volume completes the electronics section.',
        make: 'LTD',
        price: 549,
        img_url: 'https://previews.dropbox.com/p/thumb/AA-70AwgSOyQNLTfd8KxRv892HPq2ygs6pmvjopSke1xYqJxCEzefPWcska4V--_Q_hBGBYkLzYCbOfgR61nvjnsT7zunZ-xM-zKOSy57JiALoTV1PAvnXcdBZF8Rn9EzeiUO-x5IIaOsu91287TtmZ794EQ9nSclU3uv1BGlMKc06SWfjxN3q0ATXutObuoFxd9gdfUkwfjxYZeH3ali1vZldymTNYU6Dk4Jto-bubImIOX0n6TDF3kEhWV_x3odM3GkvylEKwykqZ4yxMQyCg9QyScds9o4G9wk4YeN5e8m1cOEcZfAjAafC0yLoFTH1MpSv1q_uLFFJRiZqDwLPUQVbXdM_jy-McPQiMzOfJ1Sg/p.png?fv_content=true&size_mode=5',
        category_id: 2
      },
      {id: 9, 
        name: 'Korg minilogue Polyphonic Analog Synthesizer',
        description: 'The minilogue is not a refresh of an old-time favorite, but instead a completely original concept that’s been elegantly designed from the ground-up for today’s modern producer.',
        features: 'Korg Minilogue Polyphonic Analog Synthesizer The minilogue is not a refresh of an old-time favorite, but instead a completely original concept that is been elegantly designed from the ground-up for today s modern producer. There is nothing to emulate, nothing to model after, just 100% pure analog synthesis that is fully programmable for a seemingly endless possibility of sound creation. Find inspiration it its sound with features including a polyphonic step and motion sequencer, on board tape-style delay, multiple sound shaping and filter options, and an oscilloscope display. All of these seamlessly integrated features make minilogue as fun and easy to use as it is powerful. It is the next-generation analog synthesizer for musicians of all types',
        make: 'Korg',
        price: 499,
        img_url: 'https://previews.dropbox.com/p/thumb/AA-WHdIBEA9ifG1Q3OS_Vbwj4VcVY1vUaFbMudzEWQYKMfmoPIBYYUatWbf3iqia5Shtlbk9ZH4lO20_y1oFJSdMbRAwtcPxObx4TT0DoZ9eqvqW8aAkazLnPSCTQCIHGjqSrBa_0MaISlMvl3lFDXuSNHapaMCZpK5WoPKcYuuep3Q0jor8wyQGctBNjJ86SHNkgYuuE0MsumXzHjbwd7zlNqVV6RyfQH5yqT0KaFwAeSiMQj5B7UWzpULTW97UD5LfeNPqILrqbfRouZyRrp412rFRrgJRaID_0LoSyqPs11E8hhJUJkFz3HAfitQdogL3xPSxPL4_pTI2ZwSUwtoqfA5-AeNDgF6GpkrOUWgiww/p.png?fv_content=true&size_mode=5',
        category_id: 3
      },

      ]);
    });
};
