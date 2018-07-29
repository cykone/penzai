using System;
using System.Collections.Generic;
using System.Text;

namespace Ft.Utils.Strings
{
    public static class FtStringUtils
    {
        public static string ToUpperFirst(this string s)
        {
            if (string.IsNullOrEmpty(s))
            {
                return string.Empty;
            }

            var a = s.ToCharArray();
            a[0] = char.ToUpper(a[0]);

            return new string(a);
        }
    }
}
