
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
        img_url: 'https://previews.dropbox.com/p/thumb/AA_MqU6NwMLCwc78CrEbtM27e6iGG52V73nwUoaqozp0tAwc74p4oxmldVSCbJrSdXmn261ClUWynWKP_89Xjf6CW80DZOrVMdTajC-mHP_nnxIENcunhYuFZMmNqE-iV2Z-iGBu6MgG9_dUkNKX24s92FohBSJ3yifhnMgn9Uxzu4aQIzERPmUKNL-kZ9YuoAEfO4kDH0T0Hxt1pF9Cf9kpxTDL0uXznysgbCbjv7WMQVMOAWqkyTX_85ICUu4C1wvts0hZ8_YahqqFlsUl20iaCx5vVMuaNHVoZs3Aj2LFuKE5T9NiKDVfbzr0sg1yV89j-0cc6oRD7MlIaKz2vrU7ZoZzq7tBC1-f63ToFO5OBg/p.png?fv_content=true&size_mode=5',
        category_id: 1
      },
      {id: 2, 
        name: 'Fender American Professional Jazz',
        description: 'Pushing craftsmanship to its limits, Fender design, test and endlessly experiment to create the best instruments on the planet. The Jazz Bass, a refinement of concepts first introduced in the Precision Bass, is the earliest example of this philosophy in action.',
        features: 'Rosewood,Radius: 9.5 in.,Fret size: Narrow Tall, Number of frets: 20, Inlays: Dot, Nut material: Bone, Nut width: 1.5 in. (38.1mm) ',
        make: 'Fender',
        price: 1549,
        img_url: 'https://previews.dropbox.com/p/thumb/AA_TvYFcLYV1pNOsZipaD2nuMGLVqOWQ2pPKSKwSVLS60pPEqGgXVrCunILvb-MYSJCvs3z52QuDqagnoL7TXpWNBQkG1fvkvajOuIpYxGkoX50Loi73_-_N4kYgXB-gvETCSHnpzXjDWclD4PdHwL8T1V3dgUoFFLw7313qcz_xrXUZMFL7DCNH6VymzmzhMsRRhUokc2Wx0hhAj5rvb-MzAVDEFoErDaQ6PVMMAWWz4kMki2fS7VVy-afRRGWGD-XAxN5BuykgZl_0VflpJnQrulMrYggSW-yhjLJDgTjOeKxjDlFmmxmwgLwJF2oJLTyRN8xLwGHGjn8mijPvyAl303jNWxr7VbVcnBqFJaSjYQ/p.png?fv_content=true&size_mode=5',
        category_id: 2
      },
      {id: 3, 
        name: 'Korg MS-20 Mini Analog Monophonic Synth',
        description: 'The sound of the inimitable MS-20 is now available to all with the new MS-20 Mini. The same engineers who developed the original MS-20 have perfectly reproduced its circuitry and fit it into a body 86% of the original size. The MS-20 mini will amaze with its absolutely authentic, analog synth sound.',
        features: 'Overseen by the engineers of the original MS-20,Self-oscillating high-pass/low-pass filters with distinctive distortion,External signal processor (ESP),Extremely flexible patching system,USB MIDI plus 5-pin MIDI In ',
        make: 'Korg',
        price: 529,
        img_url: 'https://previews.dropbox.com/p/thumb/AA8x_-asf9TAgiVxPdKqOvr4ErQZWvIB11EOuIYSdUubQsqXikXOQ6lDKooDElPEe7SnFhNWV90PjP7U9Zuww4yEV8Y4s520gAJzid7Eq25LH5RGScqSc3Uq_DBoRr0pLFSTojqd9nEEHj0jB135XCw8qbdGcWzMgP7QWtl1Kfm8d8YOP4_zn_9MB2ADFK1-i53ET51QmGgmhAexItjW7Ve2GeDkFHeFQV22sboaDcNHDw6WkbrTg8IRuJL7ugAe9_o2A6a_iiNpPT-9WBxMdS-8895HqAq34Q822Am30DJOysaBgCAmv7vOltecZymC_k9PqZv32uQ9uqLAyxG7zgaEFj7yXEuisHQe50Ko5YFo6w/p.png?fv_content=true&size_mode=5',
        category_id: 3
      },
      {id: 4, 
        name: 'Gretsch Guitars G5230T Electromatic Jet',
        description: 'In its 65 year existence the Gretsch Jet has been the hallmark sound for iconic players. The all-new G5230T Electromatic Jet FT Single-Cut with Bigsby captures that essential Jet power and fidelity at an incredible price.',
        features: ' Chambered Mahogany body, Maple top, Gloss finish, Mahogany set-in neck, Black Walnut fingerboard, 22 Medium Jumbo frets, 2 Black Top Filter Tron Pickups Humbucking pickups, 3-way switch, Diecast tuners with Round Button, Anchored Adjusto-Matic bridge, Bigsby tailpiece, Chrome hardware ',
        make: 'Gretsch',
        price: 599,
        img_url: 'https://previews.dropbox.com/p/thumb/AA-BzjFrUuzc21xY4WKIBzi7A0Md1TNpf_qiImK5WHZ3N6Y-uCkoxUiNeD2FgPtTb70cKCIyrh147DkjV4XaegS_tCNT0rOzHIB8Iz_fiwMQLQdqbcRj3H7-eBp79bOJo9au6Lz3BB7w9yYBAm0OAlCrmtlFYyaGH5EVoYd17XuD3QujYhUeoeo-GRO68wqTS0-E0OMJojH9fkVL6Dl-LY-Tx460A5h05mXAFwJfEk6H51_zyLpAiEWqWZ6R3crG_ncSJxDwD-auG19o9k7DtKqZop7fQUmKQGPn3loF9d60nb7xzfkOHvb8AHpAs2x1HFFyWLvUUNalv1PI1wP5xAg-0G_u36IfLclWxF74WkA_jQ/p.png?fv_content=true&size_mode=5',
        category_id: 1
      },
      {id: 5, 
        name: 'Sterling by Music Man StingRay',
        description: 'The Sterling by Music Man StingRay "Ray34" features an all-new roasted maple neck, 3-band active preamp, modern contoured body and a bridge modeled after the iconic Ernie Ball Music Man StingRay. Includes gig bag.',
        features: 'Modern contoured swamp ash body with gloss finish, Bolt-on roasted maple neck with 21 medium frets, Sterling by Music man humbucker with active EQ, Chrome hardware includes adjustable bridge and open-gear tuners',
        make: 'Sterling',
        price: 599,
        img_url: 'https://previews.dropbox.com/p/thumb/AA_nuKhX14mlp3KkWX9KTodOsPtwEk6fxocrRFs0Iywd-2Nx4QIXbuQhgIaXZdwJMPte8oLjpoLzE2NKhEghAeFcGIM1E6RyPL5Jy5p8Zr9sJOr6LB_y_UfxauFOByckioI-ONIoF3npyUnwJ0dA2ni-K04LUnP1y5GoOhCBN3OcodqMl3hdJJKuFyMXMXjrUE-AXFUi5KqcZ71269WaDndeCss9hPhLkZUWmv6GE90az9MNUjrsTjNiwuf2HXykKspI8lHow3FADIdoxn4ETrVvm6ZaKXduN48XYiFZfX_6LgLd2spraaThcif-Y0jnb7TqF4iSB4QJ9vpJ209xcAvl1YHt-dkGQJxStkifvIl1JQ/p.png?fv_content=true&size_mode=5',
        category_id: 2
      },
      {id: 6, 
        name: 'Roland JD-Xi Synthesizer',
        description: 'What do you get when you combine an interactive analog synthesizer with real-time parameter control and a keyboard with one of the most popular and highly rated digital sound libraries in the world? You get the Roland JD-Xi, an analog/digital crossover synthesizer that is the perfect instrument to address your needs.',
        features: 'Warm and rich analog sounds, Crystal clear digital timbres, Vocoder and effects, Easy programming',
        make: 'Roland',
        price: 599,
        img_url: 'https://previews.dropbox.com/p/thumb/AA-2TlhZ5oiJnnC24hmjOd71Ouet5Es5WwwFBKJLBvKu4V4XcuLiGuXYatZvwVXVM9i0Zi99-PVLQbx3ot4QlWl95NQz8z4n_kMlVZa9Ncdnzkqb8ybySkO5_HhwcsvB26IqrcZM5DaWOx_IN3jvn3yZYFKV1N0DExgBwejwhxxqR5z5eiFCaKg3ORiQNzOD2GNT0Ki_WPA7YQC0CtPy_tD3CiIT3eX7-dVUZ4oiwsh7U353wYlK5K5lx59WfCsAe8gp10IMxdLjklwQKo8SeTS7WY2cPBINtJFD49akgr4Z9myrve5xX-iEvSQq2UBINYyEG8uGZAwguh_9ZF09kRP1eFq9NayxcIyJKwRbUpRfRw/p.png?fv_content=true&size_mode=5',
        category_id: 3
      },
      {id: 7, 
        name: 'Taylor GS Mini-e Rosewood Acoustic-Electric Guitar',
        description: 'Theres something undeniably inviting about the Taylor GS Minis scaled-down size, yet a single strum reveals the impressive voice of a full-size guitar. That mix of portability and musicality has proven to be a winning combination that fits into so many scenarios in life, from the couch to the campfire to the concert hall. ',
        features: 'There is something undeniably inviting about the Taylor GS Minis scaled-down size, yet a single strum reveals the impressive voice of a full-size guitar. That mix of portability and musicality has proven to be a winning combination that fits into so many scenarios in life, from the couch to the campfire to the concert hall. It is not too big, it is not too precious, and it is not too expensive. That broad-based accessibility has given it a resounding universal appeal, not to mention a built-in fun factor. The shorter 23-1/2-inch scale length makes forming chords a breeze yet gives the instrument plenty of snap and tuning stability for a rewarding playing experience. The acoustic-electric versions enjoy a sweet upgrade with Taylors ES2 electronics. All GS-Mini models include a durable hard bag built by Taylor for the optimal fit.',
        make: 'Taylor',
        price: 699,
        img_url: 'https://previews.dropbox.com/p/thumb/AA-XCHrkkQAq-8SvdhfsMPLWYkIrG_8dSEh6f6sFqtEN0TdR76j654AmhQePe1759cbm0neHS2409Jb1L2Xb1zWciZPPES_huS6pyGIxc8O6kcWYPmV7ICOuubzs5nChAZuqKJGyQ9aSLB5lQsBqkvKChZX-Xit2xqUimBz272ANGUNhzV4Motvoed7h2Y1j_cKtNQIGFihWv1RqTdOuoVARHXpqwd7zv7_bBFP714jjkECIQPQuC_Th66pBrJBlaUpyzRGL9PiEucTT0BY2hncQoqwXBJdlXcttsxWTXYGxt3eVjKRs8p8c2QSX6Jx5fJQE8pLKgwNoEfSsZhhRKpOrK9UY8ti-EzKYi4Q0_2kdiQ/p.png?fv_content=true&size_mode=5',
        category_id: 1
      },
      {id: 8, 
        name: 'ESP LTD B-205SM 5-string Electric Bass',
        description: 'The ESP LTD B-205SM 5-String Electric Bass Guitar has a bright-sounding ash body with a beautiful spalted maple top. Featuring string-thru design and active electronics, this bass has sound features that will inspire you.Built with 5-piece maple for maximum stability.',
        features: 'The ESP LTD B-205SM 5-String Electric Bass Guitar has a bright-sounding ash body with a beautiful spalted maple top. Featuring string-thru design and active electronics, this bass has sound features that will inspire you. Built with 5-piece maple for maximum stability, the bolt-on neck is set deep into the body for a winning combination of snap and sustain. The Thin U Neck Contour gives your fingers optimum access to the full scale of the 24-fret neck. The LTD B-205SM has 5 controls for dialing in just the right sound for the song. A balance control allows you to blend the output of the 2 pickups - full neck, full bridge, or anywhere in between. Separate bass, mid, and treble boost/cut controls enable further tone tweaking of your blend setting. A master volume completes the electronics section.',
        make: 'LTD',
        price: 549,
        img_url: 'https://previews.dropbox.com/p/thumb/AA8sk-05u8ERiYN5AUBoCzGy4dW_8y74roobCLSY--UAQLVOYbCtl1rLFP6qWQEsU4q20goog6DqxiJ10d6fKZdlG0aDv3DPGOGPMFk5C-56oVsmASiLvJgF271Y5a-ekBzyB8w6ccetnFt0Iu-6oBXYJ25MxydlsOA1My81P529aGU-6QkN3MXiLmVo4_AWensKb-JNxlu20zVk_qcES-StEKZmwcZY0N4uS320eonnyWhIiZ3d5cea5DlT6aVkLpEz5mGJRTmR3S5YDgngZhLKtMphZnlBDs_Y9m9_clN64-UaqPFWZFRPlvYtelaZiWkJa--axI0nY4I_FU2fEfCBlC0rPQKOuxQxnxACDOGbSQ/p.png?fv_content=true&size_mode=5',
        category_id: 2
      },
      {id: 9, 
        name: 'Korg minilogue Polyphonic Analog Synthesizer',
        description: 'The minilogue is not a refresh of an old-time favorite, but instead a completely original concept that’s been elegantly designed from the ground-up for today’s modern producer.',
        features: 'Korg Minilogue Polyphonic Analog Synthesizer The minilogue is not a refresh of an old-time favorite, but instead a completely original concept that is been elegantly designed from the ground-up for today s modern producer. There is nothing to emulate, nothing to model after, just 100% pure analog synthesis that is fully programmable for a seemingly endless possibility of sound creation. Find inspiration it its sound with features including a polyphonic step and motion sequencer, on board tape-style delay, multiple sound shaping and filter options, and an oscilloscope display. All of these seamlessly integrated features make minilogue as fun and easy to use as it is powerful. It is the next-generation analog synthesizer for musicians of all types',
        make: 'Korg',
        price: 499,
        img_url: 'https://previews.dropbox.com/p/thumb/AA_zb2tZZ0gUp6Gd1pin8tILRVuOP4Wd3y6wUYE-uo2aK1Bq14oqsRAwWuC73cEmZ4_leXRnOVGQ0HX82Twbi4LjoJN21FDVBhHdHOut1Gt0xynDM63l224qJDKQauaQ_ceRgtP_twZGwFzXB9sYdm_psbNibirxjtPORcX2t-VQT3Bl5DiGTJgVNhuVb5ab8vS-EOgsQcHshqzeQXZR7YFY0B2RmS6HGBxazq5Ko_OGJD1U-gYQ-dRCftc8yERnTVFdMgkhRwmoTVDA04m4Ofv0orbgvtpFOTRZ56IP_cgYVPZv86OnjeWxf_iJ5KCc8oS0Pz2KRKS0W2WWvFZKzZUbZUQnBlNQVY-xdFfnhipxcA/p.png?fv_content=true&size_mode=5',
        category_id: 3
      },

      ]);
    });
};
