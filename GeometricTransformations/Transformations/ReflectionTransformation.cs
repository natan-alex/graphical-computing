namespace GeometricTransformations.Transformations;

public enum ReflectionKind
{
    JustInX,
    JustInY,
    InBothAxes,
}

public class ReflectionTransformation : ITransformation
{
    private readonly ReflectionKind _kind;

    public ReflectionTransformation(ReflectionKind kind)
    {
        _kind = kind;
    }

    private (double, double) GetXAndYFactorsBasedOnKind()
    {
        return _kind switch
        {
            ReflectionKind.JustInX => (1, -1),
            ReflectionKind.JustInY => (-1, 1),
            _ => (1, 1)
        };
    }

    public double[,] ToMatrix()
    {
        var (xFactor, yFactor) = GetXAndYFactorsBasedOnKind();

        return new double[,]
        {
            { xFactor, 0, 0 },
            { 0, yFactor, 0 },
            { 0, 0, 1 },
        };
    }
}
