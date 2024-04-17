import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Label } from "../components/ui/label";

export function PlaylistCard({ imageSrc, label }) {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{label}</CardTitle>
      </CardHeader>
      <CardContent>
        <img src={imageSrc} alt={label} className="w-full h-auto" />
      </CardContent>
    </Card>
  );
}
