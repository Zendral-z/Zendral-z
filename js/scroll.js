                                                $(function () {
                                                // Ini akan memilih semuanya dengan kelas smoothScroll
                                                // Ini akan mencegah masalah dengan carousel, scrollspy, dll...
                                                $('.smoothScroll').click(function () {
                                                    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                                                        var target = $(this.hash);
                                                        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                                                        if (target.length) {
                                                            $('html,body').animate({
                                                                scrollTop: target.offset().top
                                                            }, 700); // kecepatan scroling satuannya milisecond / milidetik
                                                            return false;
                                                        }
                                                    }
                                                });
                                            });
                                            // Ubah kecepatan menjadi apa pun yang Anda inginkan
                                            // Secara pribadi saya pikir 1000 terlalu banyak
                                            // Coba 800 atau lebih rendah, sepertinya tidak terlalu banyak tetapi akan membuat perbedaan
