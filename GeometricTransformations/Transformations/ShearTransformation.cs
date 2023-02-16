namespace GeometricTransformations.Transformations;

public class ShearTransformation : ITransformation
{
    private readonly Point _point;
    private readonly int _shearInX;
    private readonly int _shearInY;

    public ShearTransformation(Point point, int shearInX = 0, int shearInY = 0)
    {
        _point = point;
        _shearInX = shearInX;
        _shearInY = shearInY;
    }

    public double[,] ToMatrix()
    {
        var newX = _point.X + _shearInX * _point.Y;
        var newY = _point.Y + _shearInY * _point.X;

        return new double[,]
        {
            { newX, 0, 0 },
            { 0, newY, 0 },
            { 0, 0, 1 },
        };
    }
}
