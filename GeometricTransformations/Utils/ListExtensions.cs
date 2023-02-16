namespace GeometricTransformations.Utils;

public static class ListExtensions
{
    public static void AddIfNotNull<T>(this List<T> list, T? item) where T : class
    {
        if (list is null) return;

        if (item is not null)
        {
            list.Add(item);
        }
    }

    public static void AddIfNotNull<T>(this List<T> list, T? item) where T : struct
    {
        if (list is null) return;

        if (item.HasValue)
        {
            list.Add(item.Value);
        }
    }

    public static void AddAllNotNull<T>(this List<T> list, List<T?>? items) where T : struct
    {
        if (list is null) return;
        if (items is null) return;

        var nonNullValues = items
            .Where(item => item.HasValue)
            .Select(item => item!.Value);

        list.AddRange(nonNullValues);
    }

    public static void AddAllNotNull<T>(this List<T> list, List<T?>? items) where T : class
    {
        if (list is null) return;
        if (items is null) return;

        var nonNullValues = items
            .Where(item => item is not null)
            .Select(item => item!);

        list.AddRange(nonNullValues);
    }
}
